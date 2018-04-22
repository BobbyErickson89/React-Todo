import React, { Component } from 'react';
import TodoList from '../containers/todo_list';
import NewTodo from './new_todo';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
          todos: [
              {
                  id: 0,
                  name: 'Todo 1',
              },
              {
                  id: 1,
                  name: 'Todo 2',
              },
              {
                  id: 2,
                  name: 'Todo 3',
              },
              {
                  id: 3,
                  name: 'Todo 4',
              },
          ],
      }
  }

  render() {
      return (
          <div>
              My React App!
              <TodoList />
              <NewTodo />
          </div>
      );
  }
}

export default App;
