import React from 'react';
import { inject, observer } from 'mobx-react';

import Layout from './layout';
import NewToDo from './newToDo';
import ToDoList from './toDoList';

@inject('toDoStore')
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.toDoStore.fetchToDos();
  }

  render() {
    return (
      <Layout>
        <NewToDo />
        <ToDoList />
      </Layout>
    );
  }
}

export default App;
