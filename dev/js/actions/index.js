export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const addTodo = (task) => {
    console.log("Add todo task : ", task);
    return {
        type: 'ADD_TODO',
        payload: task
    }
};
export const completeTask = (taskId) => {
    console.log("completeTask : ", taskId);
    return {
        type: 'COMPLETE_TASK',
        payload: taskId
    }
};
