import React, { useState } from 'react'
import Users from './component/Users'
import NewUsers from './component/NewUsers'
import { Usercontext, UserProvider } from './Context/UserContext'

const App = () => {


 



  return (

    <UserProvider>

      <NewUsers  /> 
      <Users />
    </UserProvider>

  )
}

export default App