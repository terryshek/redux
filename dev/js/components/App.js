import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import TodoList from '../containers/todo-list';

require('../../scss/style.scss');

const App = () => (
    <div className="row">
        <div className="col col-xs-12 col-md-4">
            <h2>User List</h2>
            <UserList />
        </div>
        <div className="col col-xs-12 col-md-4">
            <h2>Todo List</h2>
            <TodoList />
        </div>
        <div className="col col-xs-12 col-md-4">
            <h2>User Details</h2>
            <UserDetails />
        </div>
    </div>
);

export default App;
