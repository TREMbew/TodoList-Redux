import React from 'react';
import {connect} from 'react-redux';
import Task from './Task';

const ListTask = ({todoList}) => {
    return (
        <div>
            {todoList.map(task => 
                <Task task={task} key={task.id}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { todoList : state.todoList}
}

export default connect(mapStateToProps)(ListTask)
