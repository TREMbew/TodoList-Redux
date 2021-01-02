import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addToDo} from '../actions';

const AddTask = (props) => {
    const [addTask, setAddTask] = useState('');
    return (
        <div>
            <input onChange={e => setAddTask(e.target.value)}
            value={addTask}></input>
            <button onClick={() => {
                if(addTask.length !== 0)
                props.addToDo(addTask)
                setAddTask('')}
            }>Add</button>
        </div>
    )
}

export default connect(null, {addToDo})(AddTask)
