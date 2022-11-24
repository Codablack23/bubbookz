import axios from "axios"

class CommFunctions {
    private server:string = process.env.NEXT_PUBLIC_API?process.env.NEXT_PUBLIC_API:"http://localhost:5505"
    private config:{} = {
        headers: {"Access-Control-Allow-Origin": "Set-Cookie"},
        withCredentials:true,
    }
    async getCommunities(){
            return await axios.get(`${this.server}/communities/`,this.config)
            .then(res=>{
                return {...res.data}
            }).catch(err=>{
             return {
                 error:"an error occurred in server",
                 axios:err
             }
            }) 
    }
    async getCommunity(id:string){
       return await axios.get(`${this.server}/communities/${id}`,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async like(id:string,data){
        return await axios.post(`${this.server}/communities/like/${id}`,{...data},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async dislike(id:string,data){
        return await axios.post(`${this.server}/communities/unlike/${id}`,{...data},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async join(id:string,data){
        return await axios.post(`${this.server}/communities/join/${id}`,{...data},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async leave(id:string,data){
        return await axios.post(`${this.server}/communities/leave/${id}`,{...data},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         } 
        })   
    }
    async createCommunity(data){
        return await axios.post(`${this.server}/communities/create`,{...data},this.config)
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

export default new CommFunctions()