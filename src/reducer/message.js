import { MESSAGE_ACTIONS_TYPES } from "../utils/const"

export const messageReducer = (state, action)=>{
    if(action.type===MESSAGE_ACTIONS_TYPES.SEND_SUCCESS_MESSAGE) return {
        content: action.payload
    }
    if(action.type===MESSAGE_ACTIONS_TYPES.SEND_ERROR_MESSAGE) return {
        content: action.payload,
        isError: true
    }
    
    return null
}