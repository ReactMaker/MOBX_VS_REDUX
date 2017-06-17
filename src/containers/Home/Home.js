import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './Home.less';

@inject('todoStore')
@observer
export default class Home extends Component {
  static propTypes = {
    todoStore: PropTypes.object
  }

  render() {
    const {
      todoStore: { todos, addTodo, removeTodo }
    } = this.props;

    return (
      <div className="container">
        <AddTodo
          handleAddTodo={addTodo}
        />
        <TodoList
          todos={[]}
          handleRemoveTodo={removeTodo}
        />
      </div>
    );
  }
}
