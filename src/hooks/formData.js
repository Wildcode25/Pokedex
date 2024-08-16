import { useState } from "react";
import { UserService } from "../service/userService.js";
import { useUser } from "./user.js";
import { useMessage } from "./message.js";
export const useFormData = ()=>{
    const {loginUser, logoutUser} = useUser()
    const {showSuccessMessage, showErrorMessage} = useMessage()
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = ({target})=>{
        const {name, value} = target;
        const newData = {
            ...data,
            [name]: value
        }
        setData(newData)
    }
    const handleCreateUser = async (e)=>{
        e.preventDefault()
     
            const {user, message} = await UserService.createUser({data})
            if(user) return showSuccessMessage(message)
            showErrorMessage(message)    
    }
    const handleLoginUser = async (e)=>{
        e.preventDefault()
        try{
            const {user , message} = await UserService.loginUser(data)
            if(user){
            window.localStorage.setItem('user', JSON.stringify(user))
            loginUser(user)
            return showSuccessMessage(message)
            }
            showErrorMessage(message)
        }catch(e){
            console.error(e.message)
            
        }
        
    }
    
    return {handleChange, data, handleLoginUser, handleCreateUser}
}