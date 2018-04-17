import React, { Component } from 'react';
import NewTodoForm from './new_todo_form';

class NewTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            showForm: false,
        };

        this.toggleState = this.toggleState.bind(this);
    }

    toggleState() {
        this.setState((prevState) => ({ showForm: !prevState.showForm }));
        // Found this solution on StackOverflow.  Apparently setState has default parameters, the first of which gives
        // you access to the previous state.  This is very useful for toggling boolean states.  Here's more info:
        // https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-react-component
        // https://stackoverflow.com/questions/39806802/lifecycle-event-state-and-prevstate-in-react-js
        // https://reactjs.org/docs/react-component.html#setstate
    }

    render() {
        return (
            <div>
                <button onClick={ this.toggleState }>Show Form</button>
                { this.state.showForm ? <NewTodoForm /> : null }
            </div>
        )
    }
}

export default NewTodo;