import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const myStyle = {
    "textDecoration": "line-through"
}
class userMedia extends Component {
    componentWillMount(){
        console.log(this.props)
    }
    constructor(props) {
        super(props);
    }

    renderData() {
        return this.props.todos.map((list, index) => {
            return (
                <div className="thumbnail" key={index}>
                    <img src={list.avatar_url} alt="avatar_url" className="media-object" width="100%"/>
                    <div className="caption">
                        <h3>{list.login}</h3>
                        <p>{list.html_url}</p>
                    </div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col col-xs-12">
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
        todos: state.todos
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, null)(userMedia);
