import axios from "axios"

interface RegisterDetails{
    email:string,
    password?:string,
    school?:string,
    faculty?:string,
    department?:string,
    firstname:string,
    lastname:string
}
interface Response{
    user?:{email?:string},
    error?:string,
    message?:string,
    status?:string,
}
class User{
    private server:string = "http://localhost:5505"  
    private config:{} = {
        headers: {"Access-Control-Allow-Origin": "Set-Cookie"},
        withCredentials:true,
    }
    async loginUser(user:{email:string,password:string}){
       return await axios.post(`${this.server}/user/login`,user,this.config)
       .then(res=>{
           const data:Response = res.data
           return {...data}
       }).catch<Response>(err=>{
        return {
            error:"an error occurred in server",
            axios:err
        }
       })
       
    }
    async signUpUser(newUser:RegisterDetails){
        return await axios.post(`${this.server}/user/register`,newUser,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        })
     }async loginWithGoogle(user:{email:string}){
        return await axios.post(`${this.server}/user/google-login`,user,this.config)
        .then(res=>{
            const data:Response = res.data
            return {...data}
        }).catch<Response>(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        })
        
     }
     async signUpWithGoogle(newUser:RegisterDetails){
         return await axios.post(`${this.server}/user/google-signup`,newUser,this.config)
         .then(res=>{
             return {...res.data}
         }).catch(err=>{
          return {
              error:"an error occurred in server",
              axios:err
          }
         })
      }
     async authenticate(){
        return await axios.post(`${this.server}/user/auth`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async logOut(){
        return await axios.post(`${this.server}/user/logout`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async getUserDetails(){
        return await axios.post(`${this.server}/user/settings/`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async updateUserDetails(data){
        return await axios.post(`${this.server}/user/settings/edit`,data,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async updatePassword(password){
        return await axios.post(`${this.server}/user/settings/change-password`,password,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async getAddress(){
        return await axios.post(`${this.server}/user/settings/address`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async getSingleAddress(id){
        return await axios.post(`${this.server}/user/settings/address/${id}`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        })  
     }
     async addAddress(data){
        return await axios.post(`${this.server}/user/settings/address/add`,data,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }

     async createOrder(data){
        return await axios.post(`${this.server}/user/orders/create`,data,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async getOrders(){
        return await axios.post(`${this.server}/user/orders/`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async getOrder(id){
        return await axios.post(`${this.server}/user/orders/${id}`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        })  
     }
     async updateAddress(id,data){
        return await axios.post(`${this.server}/user/settings/address/update/${id}`,data,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async  getNotifyPref(){
        return await axios.post(`${this.server}/user/settings/notifications`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async updateNotifyPref(data){
        return await axios.post(`${this.server}/user/settings/notifications/update`,data,this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        })
     }
     async getPreferences(){
        return await axios.post(`${this.server}/user/settings/preferences`,{},this.config)
        .then(res=>{
            return {...res.data}
        }).catch(err=>{
         return {
             error:"an error occurred in server",
             axios:err
         }
        }) 
     }
     async updatePreferences(pref){
        return await axios.post(`${this.server}/user/settings/preferences/update`,{pref},this.config)
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

export default new User();