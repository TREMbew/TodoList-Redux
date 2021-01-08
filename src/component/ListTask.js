import React from 'react';
import {connect} from 'react-redux';
import Task from './Task';

const ListTask = ({todoList}) => {
    const filterTodo = todoList.filterTodo
    const todos = todoList.initialState;
    const filterState = (todos, filterTodo) => {
        switch (filterTodo) {
            case 'completed':
                return todos.filter(task => task.isDone)
            case 'active':
                return todos.filter(task => !task.isDone)
            case 'all':
            default:
                return todos
        }
    };
    const filteredTodo = filterState(todos, filterTodo);
    return (
        <div className="todo_container">
            <div className="todo_list">
                {filteredTodo.map(task => 
                    <Task task={task} key={task.id}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todoList : state.todoList}
}

export default connect(mapStateToProps)(ListTask)
