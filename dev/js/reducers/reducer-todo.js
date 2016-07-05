/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
import Q from "q";
import axios from 'axios';
import {data} from '../mock-data/dataSouce.js';

let nextTodoId = 4
export default (state = data, action) =>{

    switch (action.type) {
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
const getData = () =>{
    let deferred = Q.defer();
    axios.get('https://api.github.com/users')
        .then(function (response) {
            if(response.status== 200){
                console.log(response)
                deferred.resolve(response.data);
            }
        })
        .catch(function (error) {
            deferred.reject(new Error(error));
        });
    return deferred.promise;
}

