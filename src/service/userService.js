import axios from "axios"
import { ErrorHandler } from "../utils/errorHandler";

const baseUrl = '/api'

export class UserService{
    static async createUser({data}){
        try{
            const response = await axios.post(`${baseUrl}/register`, data )
           
            return response.data;
        }catch(e){
            
            return ErrorHandler.getMessage(e)
        }
    }
    static async loginUser(data){
        try{
            const response = await axios.post(`${baseUrl}/login`, data)
            return response.data
        }catch(e){
            const error = ErrorHandler.getMessage(e)
            console.log(error)
            return error
        }
    }

    static async getUser(){
       try{
        const response = await axios.get(`${baseUrl}/user`)
        return response.data
       }catch(e){
        return null
       }
    }


}