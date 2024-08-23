import { useState } from "react";
import { useMessage } from "./message.js";
export const useFormData = ()=>{
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
    
    
    return {handleChange, data}
}