import { useContext, useEffect } from "react"
import { UserContext } from "../context/user.jsx"
import { UserService } from "../service/userService.js";
import { LoginForm } from "../components/loginForm.jsx";

export const useUser=()=>{
    const context = useContext(UserContext)
    
    return context
}