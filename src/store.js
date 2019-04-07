import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

const initialState = {
    users: [],
    userCount: '',
    highestRankedUsers: ''
}

const GOT_USERS = 'GOT_USERS';

const gotUsers = (users) => (
    {
        type: GOT_USERS,
        users
    }
)

export const getUsers = () => {
    return (dispatch) => {
        axios.get('/api/users')
            .then(response => response.data)
            .then(data => {
                dispatch(gotUsers(data))
            })
    }
}

// export const deleteUser = (userId) => {
//     return (dispatch) => {
//         axios.delete('/api/users/' + userId)
//             .then(response => response.data)
//             .then(data => {
              
//             })
//     }
// }

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_USERS:
            return {...state, users: action.users, userCount: action.users.length || ''}
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
