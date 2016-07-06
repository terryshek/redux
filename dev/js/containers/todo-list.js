import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { addTodo, completeTask, fetchPosts } from '../actions/index'
import { getData } from "../mock-data/initialData"

const myStyle = {
    "textDecoration": "line-through"
}
class TodoList extends Component {
    componentWillMount() {
        console.log(this.props)
        this.props.fetchPosts('https://api.github.com/users');
    }
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
    }
    changeContent(e) {
        this.setState({ task: e.target.value })
        console.log(this.state)
    }
    renderData() {
        return this.props.todos.map((list, index) => {
            return (
                <li className="media" key={list.id}>
                    <div className="media-left">
                        <img src={list.avatar_url} alt="avatar_url" className="media-object" width="64px"/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{list.login}</h4>
                        <a href={list.html_url}>
                            {list.html_url}
                        </a>
                    </div>
                </li>
            );
        })
    }


    renderList() {
        console.log(this.props)
        return this.props.todos.map((todo, index) => {
            return (
                <li className="list-group-item" style={todo.complete ? myStyle : {}}
                    key={todo.id}
                    >
                    <button onClick={() => this.props.completeTask(todo.id) } type="button" className="btn btn-primary btn-xs pull-left">Complete</button>

                    <span className="badge">{todo.complete ? "true" : "false"}</span>
                    <div>{todo.tasks} --assigner: {todo.assigner}</div>
                </li>
            );
        });
    }

    render() {
        return (

            <div className="row">
                <div className="col col-xs-12">
                    <ul className="media-list">
                        {this.renderData() }
                    </ul>
                </div>
            </div>


        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ addTodo: addTodo, completeTask: completeTask, fetchPosts: fetchPosts }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
