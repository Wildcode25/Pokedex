import {  initialUserState, userReducer } from "../reducer/user.js";
import { createContext, useReducer } from "react";

export const UserContext = createContext()

 const useUserReducer = ()=>{
    const [state, dispatch] = useReducer(userReducer, null)

    const loginUser = (user)=>{
         dispatch({
            type: 'LOGIN_USER',
            payload: user
        })
    }
   
    const logoutUser = ()=>{
        dispatch({
           type: 'LOGOUT_USER',
           payload: null
       })
   }

    return {state, loginUser, logoutUser}
}

export const UserProvider = ({children})=>{
    const {state, loginUser, logoutUser} = useUserReducer()
    return <UserContext.Provider value={{
        user: state,
        loginUser,
        logoutUser
    }}> 
        {children}
    </UserContext.Provider>
}