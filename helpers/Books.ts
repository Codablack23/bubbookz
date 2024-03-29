import axios from "axios"

function getEnv(){
    return {
        api: process.env.NEXT_PUBLIC_API,
        env: process.env.NEXT_PUBLIC_ENV
    }
}
class BookFunctions {
    private server:string =getEnv().env === "production"?getEnv().api:"http://localhost:5505"  
    private config:{} = {
        headers: {"Access-Control-Allow-Origin": "Set-Cookie"},
        withCredentials:true,
    }
    async getBooks(){
            return await axios.get(`${this.server}/books/`,this.config)
            .then(res=>{
                return {...res.data}
            }).catch(err=>{
             return {
                 error:"an error occurred in server",
                 axios:err
             }
            }) 
    }
    async getBook(id:string){
       return await axios.get(`${this.server}/books/${id}`,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
}

export default new BookFunctions()