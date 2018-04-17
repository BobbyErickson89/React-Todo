import React, { Component } from 'react';

class TodoListItem extends Component {

    render(){
        return (
            <li className="todo-list-item">{this.props.todo}</li>
        )

    }
}

export default TodoListItem;