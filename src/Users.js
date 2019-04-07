import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleUser from './SingleUser';

class Users extends Component {

    render () {
        return (
            <ul className="list-group">
                {this.props.users.map(item => {
                    return (
                        <SingleUser key={item.id} name={item.name} bio={item.bio} rank={item.rank} id={item.id} />
                    )
                })}
            </ul>
        )
    }
}

const mapStateToPops = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToPops)(Users);
