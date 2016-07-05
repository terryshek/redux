/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
let nextTodoId = 4
export default (state = originTask, action) =>{
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

