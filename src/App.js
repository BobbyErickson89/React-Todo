import React, { Component } from 'react';
import TodoList from './components/todo_list';

class App extends Component {
  render() {
    return (
        <div>
            My React App!
            <TodoList />
        </div>
    );
  }
}

export default App;
