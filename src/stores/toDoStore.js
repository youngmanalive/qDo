import { observable, action } from 'mobx';

import storage from 'utils/storage';

class ToDoStore {
  @observable
  toDos = [];

  @observable
  currentToDoId = null;

  @action
  fetchToDos = () => {
    this.toDos = storage.fetch();
  };

  persist = () => {
    storage.persist(this.toDos);
  };

  @action
  addToDo = ({ title, body = '' }) => {
    this.toDos.push({
      id: Date.now(),
      completed: false,
      title,
      body
    });

    this.persist();
  };

  @action
  removeToDo = index => {
    this.toDos.splice(index, 1);

    this.persist();
  };

  @action
  toggleToDo = index => {
    const toDo = this.toDos[index];
    const completed = !toDo.completed;

    this.toDos[index] = {
      ...toDo,
      completed
    };

    this.persist();
  };

  @action
  selectCurrentToDo = (id = null) => {
    this.currentToDoId = id;
  };

  @action
  reorderToDo = (idx, up = true) => {
    const { toDos } = this;
    const targetIdx = up ? idx - 1 : idx + 1;

    if (targetIdx < 0 || targetIdx >= toDos.length) {
      return;
    }

    [toDos[idx], toDos[targetIdx]] = [toDos[targetIdx], toDos[idx]];

    this.persist();
  }
}

export default ToDoStore;
