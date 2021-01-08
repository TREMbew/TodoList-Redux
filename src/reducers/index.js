import { combineReducers } from 'redux';

let initialState = [];

const addTodoReducer = (state = {filterTodo : 'all' , initialState} ,action) => {
    switch(action.type){
        case 'ADD_TODO' :
            return {...state, initialState : [...state.initialState, action.payload]}
        case 'EDIT_TODO' :
            return{
                ...state,
                initialState : state.initialState.map(task => task.id === action.payload.id? 
                    {...task, description: action.payload.description} : task)
            }    
        case 'DELETE_TODO':
            return {
                ...state,
                initialState: state.initialState.filter((task) => task.id !== action.payload)
            }
        case 'COMPLETE_TODO':
            return {
                ...state,
                initialState : state.initialState.map(task => task.id === action.payload? 
                    {...task, isDone: !task.isDone}: task)
            }
        case 'FILTER_TODO' :
            return {
                ...state,
                filterTodo : action.payload
            }
        default :
            return state;
    }
}


export const rootReducer = combineReducers({
    todoList : addTodoReducer,
})