import { useState } from "react"
import { RegisterForm } from "./registerForm.jsx"
import { LoginForm } from "./loginForm.jsx"
import { useUser } from "../hooks/user.js"
import { Home } from "./Home.jsx"
export const UserManagement = ()=>{
    const [toggleForm, setToggleForm] = useState(false)
    const {user} = useUser()
    
    return<>{user ? <Home user={user}/>:<div className="formContainer">
    {toggleForm ? <RegisterForm setToggleForm={setToggleForm}/>:<LoginForm setToggleForm={setToggleForm}/>}
    </div>
    }
    </>
}