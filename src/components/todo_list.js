import React, { Component } from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends Component {

    render() {
        let todoItems = this.props.todos.map((todo) => {
            return (
                <TodoListItem key={todo.id} todo={todo.name} />
            )
        });

        return (
            <ul>
                {todoItems}
            </ul>
        )
    }
}

export default TodoList;