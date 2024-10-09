import React, { useContext, useState } from 'react'
import { Usercontext } from '../Context/UserContext'
import { UsersHooks } from '../hooks/UsersHooks'

const NewUsers = () => {
    const {users, setUsers} = UsersHooks()

    let [name, setName] = useState('')

    const handleAddUser = (e) => {
        e.preventDefault()
        const newId = users.length > 0 ? Math.max(...users.map((user)=>user.id)) :'0'
        const newUser = {
            id:newId + 1,
            userName: name
        }
        setUsers((prev)=>[...prev, newUser]);
        setName('')
        
    }
  return (
    <div className='bg-gray-300 p-3 mb-10 text-center'>
        <form action="" className='w-1/2 mx-auto rounded-md'>
        <input value={name} onChange={(e)=>setName(e.target.value)} className='px-2 py-2 w-full outline-none rounded-md  ' type="text" placeholder='Enter Your Name' />
        <button onClick={handleAddUser} className='bg-green-500 px-3 py-2 rounded-md mt-5'>Add User</button>
    </form>
    </div>
  )
}

export default NewUsers