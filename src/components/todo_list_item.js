import React, { Component } from 'react';

class TodoListItem extends Component {

    render(){
        return (
            <div>{this.props.todo}</div>
        )

    }
}

export default TodoListItem;