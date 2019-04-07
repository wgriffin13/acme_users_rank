import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/users">Users</NavLink>
            </li>
        </ul>
    )
}

export default Nav
