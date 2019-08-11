import React from 'react';
import { observer, inject } from 'mobx-react';
import { Container, Field, Button } from 'radiance-ui';

import {
  Wrapper,
  Form,
  Input,
  Textarea,
  Caption,
  Chevron,
  Header,
  Heading
} from './style';

@inject('toDoStore')
@observer
class NewToDo extends React.Component {
  state = {
    title: '',
    body: '',
    isOpen: false
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeys);
  }

  handleKeys = event => {
    const { isOpen } = this.state;
    const { key } = event;

    if ((!isOpen && key.toLowerCase() === 'a') || (isOpen && key === 'Escape')) {
      this.toggleForm();
    }
  };

  update = field => event => {
    this.setState({ [field]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    const { title, body } = this.state;

    this.props.toDoStore.addToDo({
      title,
      body
    });

    this.setState({
      title: '',
      body: '',
      isOpen: false
    });
  };

  toggleForm = () => {
    this.setState(
      ({ isOpen }) => ({ isOpen: !isOpen }),
      () => {
        this.state.isOpen ? this.titleField.focus() : this.titleField.blur();
      }
    );
  };

  render() {
    const { title, body, isOpen } = this.state;

    return (
      <>
        <Wrapper>
          <Header>
            <Heading>qDo</Heading>
            <Caption onClick={this.toggleForm}>
              Add a ToDo <Chevron isOpen={isOpen} />
            </Caption>
          </Header>
          <Form isOpen={isOpen} onSubmit={this.submit}>
            <Field label='Title' labelFor='title'>
              <Input
                ref={input => { this.titleField = input; }}
                id='title'
                value={title}
                onChange={this.update('title')}
                autoComplete='off'
              />
            </Field>
            <Field label='Description' labelFor='body'>
              <Textarea id='body' value={body} onChange={this.update('body')} />
            </Field>
            <Button type='submit' disabled={!title}>
              Add ToDo
            </Button>
          </Form>
        </Wrapper>
        <Container.Divider />
      </>
    );
  }
}

export default NewToDo;
