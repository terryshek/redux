import fetch from 'isomorphic-fetch'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const sortingList = (type) => {
    console.log("You clicked on sorting by : ", type);
    return {
        type: 'SORTING_LIST',
        payload: type
    }
};
export const orderby = (type) => {
    console.log("You clicked on sorting by : ", type);
    return {
        type: 'ORDER_BY',
        payload: type
    }
};

// start fetch data
export const fetchPosts = (url) => {
    console.log("Fetch Post task : ", url);
    return dispatch => fetch(url)
        .then(res => res.json())
        .then(
            data => dispatch({ type: 'RECEIVE_POSTS_SUCCESS', data }),
            err => dispatch({ type: 'RECEIVE_POSTS_FAILURE', err })
    );
};
//end fetch data
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
