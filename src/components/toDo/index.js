import React from 'react';
import { inject, observer } from 'mobx-react';
import { RadioButton } from 'radiance-ui';
import moment from 'moment';

import {
  ToDoBanner,
  Title,
  Delete,
  Container,
  ToDoDetails,
  BodyWrapper,
  Body,
  Date,
  Divider,
  Reorder,
  Chevron
} from './style';

@inject('toDoStore')
@observer
class ToDo extends React.Component {
  remove = event => {
    event.stopPropagation();
    const { index, toDoStore } = this.props;
    toDoStore.removeToDo(index);
  };

  toggleCompleted = event => {
    event.stopPropagation();
    const { index, toDoStore } = this.props;
    toDoStore.toggleToDo(index);
  };

  toggleVisibility = () => {
    const { toDo, toDoStore } = this.props;

    toDoStore.selectCurrentToDo(
      toDoStore.currentToDoId !== toDo.id ? toDo.id : null
    );
  };

  reorderUp = event => {
    event.stopPropagation();
    const { index, toDoStore } = this.props;
    toDoStore.reorderToDo(index);
  };

  reorderDown = event => {
    event.stopPropagation();
    const { index, toDoStore } = this.props;
    toDoStore.reorderToDo(index, false);
  };

  renderBody = text =>
    text.split('\n').map((chunk, idx) => <Body key={idx}>{chunk}</Body>);

  render() {
    const { toDo, toDoStore } = this.props;
    const { id, title, body, completed } = toDo;

    const isOpen = toDoStore.currentToDoId === id;

    return (
      <Container isOpen={isOpen}>
        <ToDoBanner onClick={this.toggleVisibility}>
          <RadioButton checked={completed} onClick={this.toggleCompleted} />
          <Title>{title}</Title>
          <Delete onClick={this.remove} />
          <Reorder>
            <Chevron up='true' onClick={this.reorderUp} />
            <Chevron onClick={this.reorderDown} />
          </Reorder>
        </ToDoBanner>
        <ToDoDetails isOpen={isOpen}>
          <Divider />
          <Date>{moment(id).format('ddd M/D')}</Date>
          <BodyWrapper>{this.renderBody(body)}</BodyWrapper>
        </ToDoDetails>
      </Container>
    );
  }
}

export default ToDo;
