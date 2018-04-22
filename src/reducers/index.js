import { combineReducers } from 'redux';
import TodoReducer from './recucer_todos';

const RootReducer = combineReducers({
    todos: TodoReducer,
});

export default RootReducer;