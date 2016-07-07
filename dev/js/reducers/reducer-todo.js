/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
import axios from 'axios';
import {data} from '../mock-data/dataSouce.js';
import _ from "lodash";

let nextTodoId = 4
export const todoList = (state = [], action) =>{
    console.log(action)
    switch (action.type) {
        case 'ORDER_BY':
            return  _.orderBy(state, ['id'], [action.payload]);
            break;
        case 'RECEIVE_POSTS_SUCCESS':
            return  _.union(state,action.data);
            break;
        case 'ADD_TODO':
            return [
                ...state,
                { tasks: action.payload, assigner:"terry",id: nextTodoId++}
            ];
            break;
        case 'COMPLETE_TASK':
            return state.map((tasks)=>{return (tasks.id == action.payload)?Object.assign({}, tasks, {
                complete: !tasks.complete
            }):tasks});
            break;
    }
    return state;
}
export const sortingList = (state = 'User', action) =>{

    switch (action.type) {
        case 'SORTING_LIST':
            return action.payload
            break;

    }
    return state;
}



