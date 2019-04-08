import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postCreateUser, putUpdateUser } from './store';
import { throws } from 'assert';

class UserForm extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            name: '',
            bio: '',
            rank: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.users[0] && this.props.match) {
            const matchUser = this.props.users.filter(user => user.id === parseInt(this.props.match.params.id))[0]
            this.setState({id: matchUser.id, name: matchUser.name, bio: matchUser.bio, rank: matchUser.rank})
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.props.match)
        if (this.props.match) {
            this.props.requestUpdateUser({...this.state, rank: parseInt(this.state.rank)})
        } else {
            this.props.requestCreateUser({name: this.state.name, bio: this.state.bio, rank: this.state.rank})
        }
        this.props.history.push('/users')
    }

    render () {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input className="form-control" placeholder="name" name="name" onChange={this.handleChange} value={this.state.name} />
                <input className="form-control" placeholder="bio" name="bio" onChange={this.handleChange} value={this.state.bio} />
                <input className="form-control" placeholder="rank" name="rank" onChange={this.handleChange} value={this.state.rank} />
                <div className="btn-group" style={{marginTop: '10px'}}>
                    <button className="btn btn-primary">{(this.props.match) ? 'Edit' : 'Create'}</button>
                    <NavLink to="/users" className="btn btn-info">Cancel</NavLink>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestCreateUser: (user) => dispatch(postCreateUser(user)),
        requestUpdateUser: (user) => dispatch(putUpdateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
