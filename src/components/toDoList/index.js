import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container } from 'radiance-ui';

import ToDo from 'components/toDo';

import { NoToDos } from './style';

@inject('toDoStore')
@observer
class ToDoList extends React.Component {
  renderToDo = (toDo, index) => (
    <ToDo key={toDo.id} toDo={toDo} index={index} />
  );

  render() {
    const { toDos } = this.props.toDoStore;

    return (
      <Container.Section>
        {!toDos.length ? (
          <NoToDos>✨ Nothing Here! ✨</NoToDos>
        ) : (
          toDos.map(this.renderToDo)
        )}
      </Container.Section>
    );
  }
}

export default ToDoList;
