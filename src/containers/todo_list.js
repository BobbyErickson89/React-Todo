import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoListItem from '../components/todo_list_item';

class TodoList extends Component {

    render() {
        let todoItems = this.props.todos.map((todo) => {
            return (
                <TodoListItem key={todo.title} todo={todo.title} />
            )
        });

        return (
            <ul>
                {todoItems}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever gets returned from here will show up as props inside of TodoList.
    return {
        todos: state.todos,
    }
}

// Promotes TodoList from a component to a container.
export default connect(mapStateToProps)(TodoList);