import React, {useState} from 'react';
import {editToDo, completeToDo, deleteToDo} from '../actions';
import {connect} from 'react-redux';

const Task = (props) => {
    //console.log(props)
    const [editable, seteditable] = useState(false);
    const [done, setdone] = useState(props.task.isDone)
    const [name, setName] = useState(props.task.description);
    return (
        <div>
            {editable ? 
            (<input
                type="text" value={name} onChange={(e) => setName(e.target.value)}/>) 
            : 
            (<h4>
                {name}
            </h4>
            )}
            <button    
                onClick={() => {
                    props.completeToDo(props.task.id);
                    setdone(!done);
            }}>
            {done ? "Undone" : "Done"}
            </button>
            
            <button
                onClick={() => {
                    props.editToDo(name);
                if (editable) {
                    setName(name);
            }
                seteditable(!editable);
            }}>
            {editable ? "Update" : "Edit"}
            </button>
            <button
                onClick={() => props.deleteToDo(props.task.id)}
            >Remove</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todoList : state.todoList}
}

export default connect(mapStateToProps, {editToDo, completeToDo, deleteToDo})(Task)
