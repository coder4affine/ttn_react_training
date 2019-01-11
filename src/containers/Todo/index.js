import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default class index extends Component {
  static propTypes = {};

  state = {
    todo: "",
    todos: []
  };

  onChangeText = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    const { todo, todos } = this.state;
    this.setState({
      todos: [{ id: `${Date.now()}`, text: todo, isDone: false }, ...todos],
      todo: ""
    });
  };

  completeTodo = id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);
    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todos[index], isDone: !todos[index].isDone },
        ...todos.slice(index + 1)
      ]
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;
    const index = todos.findIndex(x => x.id === id);
    this.setState({
      todos: todos.filter(x => x.id !== id)
    });
    // [...todos.slice(0, index), ...todos.slice(index + 1)]
  };

  render() {
    const { todo, todos } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          maxWidth: 1024,
          alignItems: "center"
        }}
      >
        <h1>My Todo</h1>
        <TodoForm
          todo={todo}
          addTodo={this.addTodo}
          onChangeText={this.onChangeText}
        />
        <TodoList
          todos={todos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
