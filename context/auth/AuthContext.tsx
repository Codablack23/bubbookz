import React, {createContext, ReactNode, useEffect, useReducer} from 'react'
import { authReducer } from './reducers';
const initialState = {
    isLoggedIn:false,
    user:null
}
export const AuthContext =  createContext<any>(initialState)
interface Props{
    children:JSX.Element | ReactNode
}

export default function AuthContextProvider(props:Props){
    const [authUser,dispatch] = useReducer(authReducer,initialState);
    
    return(
     <AuthContext.Provider value={{state:authUser,dispatch}}>
        {props.children}
     </AuthContext.Provider>
    )
}