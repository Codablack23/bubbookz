import { createContext, useState } from "react"

export const CommunityContext = createContext<any>({})

export default function CommunityContextProvider({children}){
    const [community,setComm] = useState<any>({})
    return(
     <CommunityContext.Provider value={{community,action:setComm}}>
        {children}
     </CommunityContext.Provider>
    )
}