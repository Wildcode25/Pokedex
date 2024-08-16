import { useContext } from "react"
import { MessageContext } from "../context/message.jsx"

export const useMessage = ()=>{
    const context = useContext(MessageContext)
    return context
}