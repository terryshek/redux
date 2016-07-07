import React from 'react';
import TodoList from '../containers/todo-list';
import UserMedia from '../containers/user_media'
require('../../scss/style.scss');

const App = () => (
    <div>
        <nav className="navbar navbar-fixed-top navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="row" style={{"paddingTop":"80px"}}>
            <div className="col col-xs-12 col-md-4 scroll">
                <TodoList />
            </div>
            <div className="col col-xs-12 col-md-4 scroll">
                <UserMedia />
            </div>
            <div className="col col-xs-12 col-md-4 scroll">

            </div>
        </div>
    </div>
);

export default App;
