import { createContext, useReducer } from "react";
import { messageReducer } from "../reducer/message.js";

export const MessageContext = createContext()

 const useMessageReducer = ()=>{
    const [state, dispatch] = useReducer(messageReducer, null)

    const showSuccessMessage = (message)=>{
        dispatch({
            type: 'SEND_SUCCESS_MESSAGE',
            payload: message
        })
    }
    const showErrorMessage = (message)=>{
        dispatch({
            type: 'SEND_ERROR_MESSAGE',
            payload: message
        })
    }
    const closeModal = ()=>{
        dispatch({
            type: 'SEND_NULL',
            payload: null
        })
    }
    return {showErrorMessage, showSuccessMessage, closeModal, state}
}

export const MessageProvider = ({children})=>{
    const {showErrorMessage, showSuccessMessage, state, closeModal}=useMessageReducer()
    return <MessageContext.Provider value={{
        showErrorMessage,
        showSuccessMessage,
        closeModal,
        message: state
    }}>
        {children}
    </MessageContext.Provider>
}