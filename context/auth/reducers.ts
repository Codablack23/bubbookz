import { actions } from "./actions";

export const authReducer = (state,action:{type:string,data?}) =>{
   switch (action.type) {
    case actions.login:
       return {isLoggedIn:true,user:{...action.data.user}}
    case actions.logout:
      return{
         isLoggedIn:false,
         user:null
      }
    break
    default:
        return state
   }
}