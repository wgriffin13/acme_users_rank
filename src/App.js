import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import { getUsers } from './store';
import { connect } from 'react-redux';
import Users from './Users'
import UserForm from './UserForm'

class App extends Component {


    componentDidMount () {
        this.props.requestGetUsers();
    }

    render () {
        return (
            <div className="container ">
            <h1>Acme Users With Ranks</h1>
                <div>
                    <Nav userCount={this.props.users.length} highestRankedUsers={this.props.highestRankedUsers} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/users" render={() => <Users users={this.props.users} />} />
                    <Switch>
                        <Route exact path="/users/create" render={({history}) => <UserForm history={history} />} />
                        <Route exact path="/users/topRanked" render={() => <Users users={this.props.highestRankedUsers} />} />
                        <Route exact path="/users/:id" render={({match, history}) => <UserForm match={match} history={history} />} />
                    </Switch>
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

const mapStateToProps = (state) => {
    return {
        users: state.users,
        highestRankedUsers: state.highestRankedUsers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
