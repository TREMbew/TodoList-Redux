import { v4 as uuidv4 } from 'uuid';

export const addToDo = (addTodo) => {
    return {
        type : 'ADD_TODO',
        payload : {id : uuidv4(),
                    description : addTodo,
                    isDone : false}
    };
};

export const editToDo = (editTodo, id) => {
    return {
        type : 'EDIT_TODO',
        payload : {id : id,
                description : editTodo,
                isDone : false}
    };
};

export const completeToDo = (id) => {
    return {
        type: 'COMPLETE_TODO',
        payload : id
    };
};

export const deleteToDo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id,
    };
};