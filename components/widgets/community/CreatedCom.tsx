import Image from "next/image";
import Link from "next/link";
import { CommunitiesContext } from "~/context/communities/ComContext";
import {useContext, useEffect, useState} from 'react'
import { AuthContext } from "~/context/auth/AuthContext";
interface Props{
   heading:string,
   [key:string]:any
}

function Community({community}){
  return(
    <div className="com flex justify-content-space-between">
    <div className="img-container w-30 w-md-40 min-vh-20 curved">
      <Image src={community.banner_img} alt="" height={"100%"} width="100%" className="img-fluid vh-20 curved" />
    </div>
    <div className="info w-65 w-md-40">
    <h1 className="small-16">{community.title}</h1>
     <p className="small-14">{community.about.slice(0,60)}...</p><br />
    </div>
    </div>
  )
}
export default function CreatedCommunities({heading}:Props):JSX.Element{
  const {state} = useContext(AuthContext)
  const [allCom,setAllCom] = useState<any[]>([])
   const {data} = useContext(CommunitiesContext)
   
   useEffect(()=>{
    if(state && data){
      setAllCom(data.filter(com=>com.createdBy == state.user.email))
    }
   },[state,data])
    return(
        <div className="created-communities card w-100 min-vh-50 curved p-relative">
        <header>
           <h1 className="small-18 fw-reg"> Communities You {heading}</h1>
        </header>
       <div style={{padding:'0.5em'}}>
       {allCom.length > 0 ?
        allCom.slice(0,2).map(community=>
        <Community key={community.community_id} community={community}/>  
        ):
        <p className="text-center w-100"> You have not {heading} any communities yet</p>
      }
       </div>
       {allCom.length > 0 && (
         <p className="text-center view-all-link">
         <Link href={"/dashboard/communities"}>
         <a className="text-theme">view all</a>
         </Link>
       </p>
       )}
      </div>
    )
}