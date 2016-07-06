/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
import axios from 'axios';
import {data} from '../mock-data/dataSouce.js';

let nextTodoId = 4
export default (state = [], action) =>{
    console.log(action)
    switch (action.type) {
        case 'RECEIVE_POSTS_SUCCESS':
            console.log("action : 'RECEIVE_POSTS_SUCCESS'")
            console.log(state)
            console.log(action.data)
            return  action.data;
            break;
        case 'ADD_TODO':
            console.log("action : 'ADD_TODO'")
            console.log(state)
            return [
                ...state,
                { tasks: action.payload, assigner:"terry",id: nextTodoId++}
            ];
            break;
        case 'COMPLETE_TASK':
            console.log("action : 'COMPLETE_TASK'")
            console.log(state)
            return state.map((tasks)=>{return (tasks.id == action.payload)?Object.assign({}, tasks, {
                complete: !tasks.complete
            }):tasks});
            break;
    }
    return state;
}
const originTask = [
        {
            id:1,
            tasks:"sleeping",
            complete:false,
            assigner:"terry"
        },
        {
            id:2,
            tasks:"bathing",
            complete:false,
            assigner:"terry"
        },
        {
            id:3,
            tasks:"house work",
            complete:false,
            assigner:"terry"
        },
]


