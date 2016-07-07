import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import TodoList from '../containers/todo-list';

require('../../scss/style.scss');

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col col-xs-12 col-md-4 col-md-offset-4">
                <TodoList />
            </div>
        </div>
    </div>
);

export default App;
