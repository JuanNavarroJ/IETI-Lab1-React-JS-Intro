import React from 'react';
import {TodoList} from './TodoList';
import './App.css';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [{text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }], text: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      //alert(this.state.items.length)
      return (
        <div className="App">
          <header className="App-header">
            <h3>Todo List</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="new-todo">
                new TODO
              </label>
              <input
                id="new-todo"
                onChange={this.handleChange}
                value={this.state.text}
              />
              <button>
                Add Todo #{this.state.items.length + 1}
              </button>
            </form>
          </header>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      //alert(this.state.items.length)
      if (!this.state.text.length) {
        return;
      }
      const newItem = {
        text: this.state.text,
        dueDate: new Date(Date.now())
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
      
    }
  }