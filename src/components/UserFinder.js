import React, {Fragment, useState, useEffect, Component} from 'react';

import Users from "./Users";

import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context';
import ErrorBoundary from './ErrorBoundary';

// const DUMMY_USERS = [
//     {id: 'u1', name: 'Danushka'},
//     {id: 'u2', name: 'Lakmi'},
//     {id: 'u3', name: 'Supuni'}
// ]

class UserFinder extends Component {
    static contextType = UsersContext

    constructor() {
        super()
        this.state = {
            flteredUsers: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.setState({flteredUsers: this.context.users})
    }

    componentDidUpdate(prevProps, prevState) { //prevProps, prevState; prevent the infinite loop; useEffect(() => {}, [searchTerm = prevState])
        if(prevState.searchTerm !== this.state.searchTerm) {
            this.setState({flteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))})
        }
    }

    searchChangeHandler = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return(
            <Fragment>
                <div className={classes.finder}>
                    <input type="search" onChange={this.searchChangeHandler} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.flteredUsers} />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//     const [searchTerm, setSearchTerm] = useState('')

//     useEffect(() => {
//         setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)))
//     }, [searchTerm])

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value)
//     }
//     return(
//         <Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </Fragment>
//     )
// }

export default UserFinder
