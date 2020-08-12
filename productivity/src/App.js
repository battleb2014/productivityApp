import React, { PureComponent } from 'react';
import TodoList from './Components/Todo-Components/TodoList';
import TodoForm from './Components/Todo-Components/TodoForm';
import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      todoList: [{
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
      todoList: [...this.state.todoList, newTask],
      todo: ' '
    })
  }

  toggleComplete = (itemId) => {
    const todoList = this.state.todoList.map(todo => {
      if (todo.id === itemId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todoList, todo: ' ' });
  }

  removeItems = (event) => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoList: prevState.todos.filter(todo => {
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
          todoList={this.state.todoList}
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
        />
        <TodoList
          todoList={this.state.todoList}
          toggleComplete={this.toggleComplete}
          removeItems={this.removeItems}
        />
      </div>
    );
  }
}

export default App;
