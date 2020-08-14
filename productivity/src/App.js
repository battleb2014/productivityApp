import React, { PureComponent } from 'react';
import TodoList from './Components/Todo-Components/TodoList';
import TodoForm from './Components/Todo-Components/TodoForm';
import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        task: ' ',
        id: ' ',
        completed: false
      }],

      todo: ' '
    }
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addTask = (event) => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ' '
    })
  }

  toggleComplete = (itemId) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos, todo: ' ' });
  }

  removeItems = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return !todo.completed;
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <TodoForm
          todos={this.state.todos}
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
        />
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
          removeItems={this.removeItems}
        />
      </div>
    );
  }
}

export default App;
