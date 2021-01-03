import React, {useState} from 'react';
import {editToDo, completeToDo, deleteToDo} from '../actions';
import {connect} from 'react-redux';
import {FaTrashAlt, FaCheckSquare, FaEdit} from 'react-icons/fa'

const Task = (props) => {
    const [editable, seteditable] = useState(false);
    const [done, setdone] = useState(props.task.isDone)
    const [name, setName] = useState(props.task.description);
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
                    props.completeToDo(props.task.id);
                    setdone(!done);
            }}>
                <FaCheckSquare className='faCheck'/>
            </button>
            
            <button
                className='edit_btn'
                onClick={() => {
                    props.editToDo(props.task.description);
                if (editable) {
                    setName(name);
            }
                seteditable(!editable);
            }}>
                <FaEdit className='faEdit'/> 
            </button>
            
            <button
                className='delete_btn'
                onClick={() => props.deleteToDo(props.task.id)}
            >
                <FaTrashAlt className='faTrash'/>
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todoList : state.todoList}
}

export default connect(mapStateToProps, {editToDo, completeToDo, deleteToDo})(Task)
