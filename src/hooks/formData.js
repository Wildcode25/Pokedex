import { useState } from "react";
export const useFormData = ()=>{
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