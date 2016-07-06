import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { addTodo, completeTask, fetchPosts } from '../actions/index'
import { getData } from "../mock-data/initialData"

const myStyle = {
    "textDecoration": "line-through"
}
class TodoList extends Component {
    componentWillMount(){
        console.log(this.props)
        this.props.fetchPosts('https://api.github.com/users');
    }
    constructor(props) {
        super(props);
        this.state = {
            task:""
        };
    }
    changeContent(e) {
        this.setState({task: e.target.value})
        console.log(this.state)
    }


    renderList() {
        console.log(this.props)
        return this.props.todos.map((todo, index) => {
            return (
                <li className="list-group-item" style={todo.complete?myStyle:{}}
                    key={todo.id}
                    >
                    <button onClick={() => this.props.completeTask(todo.id)} type="button" className="btn btn-primary btn-xs pull-left">Complete</button>

                    <span className="badge">{todo.complete? "true":"false"}</span>
                    <div>{todo.tasks} -- assigner : {todo.assigner}</div>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={this.changeContent.bind(this)} placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={()=>this.props.addTodo(this.state.task)}>Go!</button>
                        </span>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <ul className="list-group">
                        {this.renderList()}
                    </ul>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
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
function matchDispatchToProps(dispatch){
    return bindActionCreators({addTodo: addTodo,completeTask:completeTask, fetchPosts:fetchPosts }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
