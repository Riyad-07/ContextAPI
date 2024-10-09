import { useContext } from "react"
import { Usercontext } from "../Context/UserContext"

export const UsersHooks = () => {
    return useContext(Usercontext)
}