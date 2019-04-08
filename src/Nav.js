import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({userCount, highestRankedUsers}) => {
    return (
        <ul className="nav nav-tabs" style={{marginBottom: '10px'}}>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/users">Users ({userCount})</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/users/create">Create A User</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/users/topRanked">Top Ranked ({highestRankedUsers.map(user => user.name).join(' ')})</NavLink>
            </li>
        </ul>
    )
}

export default Nav
