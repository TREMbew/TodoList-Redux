import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../actions';
import { SiAddthis } from 'react-icons/si';

const AddTask = (props) => {
    const [addTask, setAddTask] = useState('');
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
            type="text"
            placeholder="Enter your todo ..."
            className="todo_input"
            onChange={e => setAddTask(e.target.value)}
            value={addTask}>
            </input>
            <button
            className="todo_button"
            type="submit"
            onClick={() => {
                if(addTask.length !== 0)
                props.addToDo(addTask)
                setAddTask('')}
            }>
                <SiAddthis />
            </button>
            <div className="select">
                <select name="todos" className="filter_todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                </select>
            </div>
        </form>
    )
}

export default connect(null, {addToDo})(AddTask)
