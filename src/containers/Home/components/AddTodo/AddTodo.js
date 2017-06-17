import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormControl, Button } from 'react-bootstrap';

export default class AddTodo extends Component {
  static propTypes = {
    handleAddTodo: PropTypes.func,
  }

  state = {
    text: '',
  }

  addTodo = (text) => {
    const { handleAddTodo } = this.props;
    handleAddTodo(text);

    this.setState({
      text: '',
    });
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const { text } = this.state;

    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Todo..."
          onChange={this.changeText}
          value={text}
        />
        {' '}
        <Button bsStyle="primary" onClick={() => this.addTodo(text)}>Add</Button>
      </Form>
    );
  }
}
