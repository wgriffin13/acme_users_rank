import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'

export default class App extends Component {

    render () {
        return (
            <div>
            <h1>Acme Users With Ranks</h1>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        )
    }
}
