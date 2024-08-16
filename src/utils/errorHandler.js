export class ErrorHandler{
    static getMessage(e){
        if(e.request.status === 400) return {message: e.response.data[0].message}
        return e.response.data

    }
}