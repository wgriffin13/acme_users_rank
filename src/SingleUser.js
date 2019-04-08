import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleUser = ({name, bio, rank, id, requestDeleteUser}) => {
    return (
        <li className="list-group-item">
            {name}
            <br />
            {bio}
            <br />
            <span className="badge badge-success" style={{marginBottom: '10px'}}>Ranked {rank}</span>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <button className="btn btn-warning" onClick={()=>requestDeleteUser(id)}>Delete</button>
                <NavLink to={`/users/${id}`}>Edit</NavLink>
            </div>
        </li>
    )
}

export default SingleUser
