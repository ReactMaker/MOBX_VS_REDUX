import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { Form, FormControl, Button } from 'react-bootstrap';

@observer
export default class AddTodo extends Component {
  static propTypes = {
    handleAddTodo: PropTypes.func,
  }

  @observable text = '';

  @action addTodo = (text) => {
    const { handleAddTodo } = this.props;
    handleAddTodo(text);
    this.text = '';
  }

  @action changeText = (e) => {
    this.text = e.target.value;
  }

  render() {
    return (
      <Form inline>
        <FormControl
          type="text"
          placeholder="Todo..."
          onChange={this.changeText}
          value={this.text}
        />
        {' '}
        <Button bsStyle="primary" onClick={() => this.addTodo(this.text)}>Add</Button>
      </Form>
    );
  }
}
