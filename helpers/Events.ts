import axios from "axios"

class EventsFunctions {
    private server:string = process.env.NEXT_PUBLIC_API?process.env.NEXT_PUBLIC_API:"http://localhost:5505" 
    private config:{} = {
        headers: {"Access-Control-Allow-Origin": "Set-Cookie"},
        withCredentials:true,
    }
    async getEvents(){
            return await axios.get(`${this.server}/events/`,this.config)
            .then(res=>{
                return {...res.data}
            }).catch(err=>{
             return {
                 error:"an error occurred in server",
                 axios:err
             }
            }) 
    }
    async getEvent(id:string){
       return await axios.get(`${this.server}/events/${id}`,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async registerEvent(id:string,data){
        return await axios.post(`${this.server}/events/register/${id}`,{...data},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async getSubbedEvents(){
        return await axios.get(`${this.server}/events/subscribed`,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async getEventTicket(id:string){
        return await axios.get(`${this.server}/events/tickets/${id}`,this.config)
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

export default new EventsFunctions()