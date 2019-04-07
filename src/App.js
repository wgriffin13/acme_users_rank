import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import { getUsers } from './store';
import { connect } from 'react-redux';
import Users from './Users'

class App extends Component {

    componentDidMount () {
        this.props.requestGetUsers();
    }

    render () {
        return (
            <div>
            <h1>Acme Users With Ranks</h1>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestGetUsers: () => dispatch(getUsers())
    }
}

export default connect(null, mapDispatchToProps)(App)
