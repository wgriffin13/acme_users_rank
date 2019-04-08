/* eslint-disable complexity */
/* eslint-disable no-case-declarations */
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
    users: [],
    userCount: '',
    highestRankedUsers: []
}

const GOT_USERS = 'GOT_USERS';
const DELETE_USER = 'DELETE_USER';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER'

const updateUser = (user) => (
    {
        type: UPDATE_USER,
        user
    }
)

const createUser = (user) => (
    {
        type: CREATE_USER,
        user
    }
)

const gotUsers = (users) => (
    {
        type: GOT_USERS,
        users
    }
)

const userToDelete = (userId) => (
    {
        type: DELETE_USER,
        userId
    }
)

export const postCreateUser = (tempUser) => {
    return (dispatch) => {
        axios.post('/api/users', tempUser)
            .then(response => response.data)
            .then(data => {
                dispatch(createUser(data))
            })
    }
}

export const getUsers = () => {
    return (dispatch) => {
        axios.get('/api/users')
            .then(response => response.data)
            .then(data => {
                dispatch(gotUsers(data))
            })
    }
}

export const deleteUser = (userId) => {
    return (dispatch) => {
        axios.delete('/api/users/' + userId)
            .then(() => dispatch(userToDelete(userId)))
    }
}

export const putUpdateUser = (user) => {
    return (dispatch) => {
        console.log(user.id)
        axios.put(`/api/users/${user.id}`, user)
            .then(() => dispatch(updateUser(user)))
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_USERS:
            let topRank = Math.min(...action.users.map(user => user.rank))
            let topRankArr = action.users.filter(user => user.rank === topRank)
            return {...state, users: action.users, userCount: action.users.length || '', highestRankedUsers: topRankArr || ''}
        case DELETE_USER:
            let newUserArr = state.users.filter(user => user.id !== action.userId)
            topRank = Math.min(...newUserArr.map(user => user.rank))
            topRankArr = newUserArr.filter(user => user.rank === topRank)
            return {...state, users: newUserArr, userCount: newUserArr.length || '', highestRankedUsers: topRankArr || ''}
        case CREATE_USER:
            newUserArr = [...state.users, action.user]
            console.log(newUserArr)
            topRank = Math.min(...newUserArr.map(user => user.rank))
            topRankArr = newUserArr.filter(user => user.rank === topRank)
            return {...state, users: newUserArr, userCount: newUserArr.length || '', highestRankedUsers: topRankArr || ''}
        case UPDATE_USER:
            newUserArr = state.users.reduce((acc, user) => {
                if (user.id === parseInt(action.user.id)) {
                    acc.push(action.user)
                } else {
                    acc.push(user)
                }
                return acc
            }, [])
            console.log(newUserArr)
            topRank = Math.min(...newUserArr.map(user => user.rank))
            topRankArr = newUserArr.filter(user => user.rank === topRank)
            return {...state, users: newUserArr, userCount: newUserArr.length || '', highestRankedUsers: topRankArr || ''}
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
