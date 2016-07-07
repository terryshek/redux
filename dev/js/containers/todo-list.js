import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//action
import { addTodo, completeTask, fetchPosts, sortingList, orderby} from '../actions/index'

const myStyle = {
    "textDecoration": "line-through"
}
class TodoList extends Component {
    componentWillMount() {
        this.props.fetchPosts('https://api.github.com/users');
    }

    constructor(props) {
        super(props);
        this.state = {
            orderById: 'asc'
        };
    }

    renderData() {
        return this.props.todos.map((list, index) => {
            return (list.type == this.props.type) ? (
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
            ) : "";
        })
    }

    activeType(type) {
        return (type == this.props.type) ? "active" : "";
    }

    orderByList() {
        this.setState({"orderById": (this.state.orderById == 'asc') ? 'desc' : 'asc'});
        this.props.orderby(this.state.orderById);
    }

    render() {
        const { sortingList, orderby } =this.props
        return (
            <div className="row">
                <div className="col col-xs-12 col-md-6">
                    <ul className="nav nav-pills">
                        <li role="presentation" className={this.activeType("User")}><a
                            onClick={()=>sortingList("User")}>User</a></li>
                        <li role="presentation" className={this.activeType("Organization")}><a
                            onClick={()=>sortingList("Organization")}>Organization</a></li>
                        <li role="presentation">
                            <button type="button" style={{"paddingRight":"10px"}}
                                    className="btn btn-default btn-small"
                                    onClick={this.orderByList.bind(this)}>
                                <span style={{"padding":"5px"}}>Sorting ID</span>
                                <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                            </button>
                        </li>
                    </ul>
                    <br/>

                    <ul className="media-list list">
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
        todos: state.todos,
        type: state.type
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addTodo,
        completeTask,
        fetchPosts,
        sortingList,
        orderby
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
