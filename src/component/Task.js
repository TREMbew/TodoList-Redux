import React, {useState} from 'react';
import {editToDo, completeToDo, deleteToDo} from '../actions';
import {connect} from 'react-redux';
import {FaTrashAlt, FaCheckSquare, FaEdit} from 'react-icons/fa'

const Task = ({task,editToDo, completeToDo, deleteToDo}) => {
    const [editable, seteditable] = useState(false);
    const [done, setdone] = useState(task.isDone)
    const [name, setName] = useState(task.description);
    return (
        <div className={"todo " + (done ? 'completedItem' : '')}>
            {editable ? 
            (<input
                type="text" value={name} onChange={(e) => setName(e.target.value)}/>) 
            : 
            (<h4 className='todo_item'>
                {name}
            </h4>
            )}
            <button
                className='complete_btn'
                onClick={() => {
                    completeToDo(task.id);
                    setdone(!done);
            }}>
                <FaCheckSquare className='faCheck'/>
            </button>
            
            {done? (null) 
            : 
            (<button
                className='edit_btn'
                onClick={() => {
                    editToDo(task.description, task.id);
                    seteditable(!editable);
            }}>
                <FaEdit className='faEdit'/> 
            </button>)}

            <button
                className='delete_btn'
                onClick={() => deleteToDo(task.id)}
            >
                <FaTrashAlt className='faTrash'/>
            </button>
        </div>
    )
}

export default connect(null, {editToDo, completeToDo, deleteToDo})(Task)
