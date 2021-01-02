import { v4 as uuidv4 } from 'uuid';

export const addToDo = (addTodo) => {
    return {
        type : 'ADD_TODO',
        payload : {id : uuidv4(),
                    description : addTodo,
                    isDone : false}
    };
};

export const editToDo = (editTodo) => {
    return {
        type : 'EDIT_TODO',
        payload : {id : uuidv4(),
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

export const filterDone = () => {
    return {
        type: 'FILTER_DONE'
    }
}

export const filterAll = () => {
    return {
        type: 'FILTER_ALL'
    }
}

export const filterUndone = () => {
    return {
        type: 'FILTER_UNDONE'
    }
}