import { UserService } from "../service/userService";
import { USER_ACTIONS_TYPES } from "../utils/const"

export const initialUserState = JSON.parse(window.localStorage.getItem('user'))

export const userReducer = (state, action)=>{
    if(action.type===USER_ACTIONS_TYPES.LOGIN) return action.payload
    if(action.type===USER_ACTIONS_TYPES.LOGOUT) return null
}