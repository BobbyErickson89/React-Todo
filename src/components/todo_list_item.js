import React, { Component } from 'react';

class TodoListItem extends Component {

    render(){
        console.log(this.props);

        return (
            <div>{this.props.todo}</div>
        )

    }
}

export default TodoListItem;