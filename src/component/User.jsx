import React, { useContext } from 'react'
import { Usercontext } from '../Context/UserContext'
import { UsersHooks } from '../hooks/UsersHooks'

const User = ({user}) => {
    const {users, setUsers} = UsersHooks()
    const {id, userName}= user

    const handledelet = (id) => {
        const filteredUser = users.filter((user)=>user.id !== id);
        setUsers(filteredUser)
        
    }
  return (
    <div className='bg-orange-500 rounded-md p-2'>
        <p className='text-red-600 text-base font-semibold'>{id}</p>
        <h2 className='text-black capitalize font-bold text-2xl'>{userName}</h2>
        <button onClick={()=>handledelet(id)} className='bg-red-500 rounded-md px-3 py-2 font-semibold text-white mt-3'>Delet</button>
    </div>
  )
}

export default User