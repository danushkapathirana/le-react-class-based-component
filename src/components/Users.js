import React, { useState } from 'react';

import User from './User';

import classes from './Users.module.css'

const DUMMY_USERS = [
    {id: 'u1', name: 'Danushka'},
    {id: 'u2', name: 'Lakmi'},
    {id: 'u3', name: 'Supuni'}
]

const Users = () => {
    const [showUsers, setShowUsers] = useState(true)

    const toggleUsersHandler = () => {
        setShowUsers((prevState) => !prevState)
    }

    const usersList = (<ul>{DUMMY_USERS.map((user) => (<User key={user.id} name={user.name}/>))}</ul>)

    return(
        <div className={classes.users}>
            <button onClick={toggleUsersHandler}>
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
            {showUsers && usersList}
        </div>
    )
}

export default Users
