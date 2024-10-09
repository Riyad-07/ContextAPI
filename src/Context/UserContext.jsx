import { createContext, useState } from "react";

export const Usercontext = createContext({})


export const UserProvider = ({children}) => {

    const [users, setUsers] = useState([
        // {
        //   id: 1,
        //   userName: 'riyad',
        // },
        // {
        //   id: 2,
        //   userName: 'sr',
        // },
      ])
    
    
    



    return(
        <Usercontext.Provider 
        value={
          {users, setUsers}
        }
      >
       {children}
      </Usercontext.Provider>
    )
}