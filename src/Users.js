import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleUser from './SingleUser';
import { deleteUser } from './store';

class Users extends Component {

    render () {
        return (
            <ul className="list-group">
                {this.props.users.map(item => {
                    return (
                        <SingleUser key={item.id} name={item.name} bio={item.bio} rank={item.rank} id={item.id} requestDeleteUser={this.props.requestDeleteUser} />
                    )
                })}
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestDeleteUser: (userId) => dispatch(deleteUser(userId)),
    }
}

export default connect(null, mapDispatchToProps)(Users);
