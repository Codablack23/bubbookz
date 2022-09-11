import { useContext, useEffect, useState } from "react";
import SortWidget from "~/components/elements/filter";
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";
import Community from "~/components/widgets/dashboard/community";
import { AuthContext } from "~/context/auth/AuthContext";
import { CommunitiesContext } from "~/context/communities/ComContext";

interface Com{
  title:string,
  about:string,
  banner_img:string,
  likes:string | number
  members:string[]
  [key:string]:any
}

export default function DashboardCommunity():JSX.Element{
    const [isActive, setIsActive] = useState("created")
    const [communities,setCommunites] = useState<Com[]>([])
    const {data} = useContext(CommunitiesContext)
    const {state} = useContext(AuthContext)

    useEffect(()=>{
      console.log(data)
      if(data && state){
         if(state.isLoggedIn){
            const allCom = (isActive === "created"
            ?data.filter(com=>com.createdBy === state.user.email)
            :data.filter(com=>com.members.includes(state.user.email)))
            setCommunites(allCom)
         }
      }
    },[data,state,isActive])

    return(
     <DashboardLayout activePage={"community"}>
        <div className="flex align-items-center w-30 w-md-50 w-sm-95 mb-3">
                <button 
                className={`btn w-50 ${isActive ==="joined"?"bg-theme":"bub-bg-grey"}`}
                style={{marginRight:"0.9em"}}
                onClick={()=>setIsActive("joined")}
                >
                Joined
                </button>
                <button 
                className={`btn w-50 ${isActive === "created"?"bg-theme":"bub-bg-grey"}`}
                onClick={()=>setIsActive("created")}
                >Created</button>
        </div>
       <div className="flex d-sm-block align-items-center justify-content-space-between">
         <div className="flex align-items-center">
         <p className="fw-bold bub-text-dark bub-case-capital">Communities You Have {isActive}({communities.length})</p>
         <button className="btn-small bg-theme">
            <i className="bi bi-plus-lg"></i>
         </button>
         </div>
        <div className="w-15 w-md-30 w-sm-50">
         <SortWidget/>
        </div>
       </div><br />
       <section className="bub__dashboard-communities">
        {communities.length > 0 && (
           communities.slice(0,4).map(com=>(
            <Community isActive={isActive} community={com} key={com.community_id}/>
           ))
        )}
       </section>
     </DashboardLayout>
    )
}