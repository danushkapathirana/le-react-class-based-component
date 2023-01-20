import React, {Fragment, useState, useEffect} from 'react';

import Users from "./Users";

import classes from './UserFinder.module.css'

const DUMMY_USERS = [
    {id: 'u1', name: 'Danushka'},
    {id: 'u2', name: 'Lakmi'},
    {id: 'u3', name: 'Supuni'}
]

const UserFinder = () => {
    const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)))
    }, [searchTerm])

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value)
    }
    return(
        <Fragment>
            <div className={classes.finder}>
                <input type='search' onChange={searchChangeHandler} />
            </div>
            <Users users={filteredUsers} />
        </Fragment>
    )
}

export default UserFinder
