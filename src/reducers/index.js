import { combineReducers } from 'redux';
//import { v4 as uuidv4 } from 'uuid';

let initialState = [
    /*{id : uuidv4(),
    description : 'Learn HTML',
    isDone : false},
    {id : uuidv4(),
    description : 'Learn CSS',
    isDone : false},
    {id : uuidv4(),
    description : 'Learn React',
    isDone : false}*/
];

const addTodoReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return [...state, action.payload];
        case 'EDIT_TODO' :
            let newTodo = state;
            let index = -1;
            for (let i = 0; i < newTodo.length; i++) {
                index++;
                if (newTodo[i].id === action.payload.id) {
                break;
                }
            }
            if (index !== -1) {
                newTodo[index] = action.payload;
                return newTodo;
            }
            break;
        case 'DELETE_TODO':
            let newTodos = [...state];
            newTodos = newTodos.filter((task) => task.id !== action.payload);
            return newTodos;
        case 'COMPLETE_TODO':
            return state.map(task => task.id === action.payload? {...task, isDone: !task.isDone}: task);
        default :
            return state;
    }
}


export const rootReducer = combineReducers({
    todoList : addTodoReducer,
})