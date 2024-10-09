import React, { useContext } from 'react'
import User from './User';
import { Usercontext } from '../Context/UserContext';
import { UsersHooks } from '../hooks/UsersHooks';

const Users = () => {

    const {users, setUsers} = UsersHooks()
  return (
    <div className='grid grid-cols-4 gap-4'>
    {users.map((user, index)=> <User user={user} />)}
    </div>
  )
}

export default Users