import { message } from "antd"
import { createContext, useEffect, useState } from "react"
import Communities from "~/helpers/Communities"

interface Communitiy{
    [key:string]:any
}
export const CommunitiesContext = createContext<any>([])

export default function CommunitiesProvider({children}){
    const [communitites,setCommunities] = useState<Communitiy[]>([])
    async function getCommunities(){
        const response = await Communities.getCommunities()
        if(response.status == "success"){
            setCommunities(response.communities)
        }
        else{
          message.error("Sorry could not get communities")
        }
    }
    useEffect(()=>{
      
      getCommunities()
    },[])
    return (
     <CommunitiesContext.Provider value={{data:communitites}} >
       {children}
     </CommunitiesContext.Provider>
    )
}