import React from "react";

import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";
// import Users from "./components/Users";

const DUMMY_USERS = [
  {id: 'u1', name: 'Danushka'},
  {id: 'u2', name: 'Lakmi'},
  {id: 'u3', name: 'Supuni'}
]

const App = () => {
  const usersContext = {
    users: DUMMY_USERS
  }
  
  return(
    <UsersContext.Provider value={usersContext}>
      {/* <Users /> */}
      <UserFinder />
    </UsersContext.Provider >
  )
}

export default App
