import { observable, action } from 'mobx';

class TodoStore {
  @observable todos = [];

  constructor() {
    this.test = 111;
  }

  @action addTodo(text) {
    this.todos.push({ text });
  }

  @action removeTodo(index) {
    this.todos.splice(index, 1);
  }
}

export default new TodoStore();
