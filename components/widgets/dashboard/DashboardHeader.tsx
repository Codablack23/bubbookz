import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";

export default function DashboardHeader(){
  const {state} = useContext(AuthContext)
  const [user,setUser] = useState<any>({})

  useEffect(()=>{
    if(state && state.user !== null){
      setUser(state.user)
    }
  },[state])
    return(
        <header className="bub-dashboard-header">
           <div className="bub-dashboard-banner bg-accent-1">
               <h1 className="font-a fw-reg text-center text-white small-26 small-sm-16 small-md-22">
                  Welcome to Your Dashboard
                </h1>
           </div>
           <div className="bub-account-info bg-white container-small card br w-85 w-md-95">
             <div className="bub-account-cover-container text-center">
               <div className="bub-account-cover flex align-items-center justify-content-center" style={{borderRadius:"50%",backgroundColor:"#22323F"}}>
                  {user && user.profile_picture?
                      <Image src="/images/dashboard-profile.svg" layout="responsive" alt="profile_picture" height={"100%"} width={"100%"} />
                  :<i className="bi bi-person small-40 bub-text-white"></i>
                  
                  }
               </div>
               <p className="small-26 fw-bold">{user.first_name} {user.last_name}</p>
               <p className="text-disabled">{user.email}</p>
             </div><br />
             <div className="flex justify-content-space-between w-100">
                 <p className="text-disabled">Account Type : <b className="bub-case-capital">{user.account_type}</b></p>
                 <p>
                   <i className="bi bi-pencil text-disabled small-16 fw-bold"></i>
                 </p>
             </div><br />
             <div className="flex justify-content-space-between d-md-block w-100">
                <div style={{
                  marginBottom:"15px"
                }}>
                  <p className="text-disabled small-14">School</p>
                  <p className="small-16">{user.school?user.school:"N/A"}</p>
                </div>
                <div style={{
                  marginBottom:"15px"
                }}>
                  <p className="text-disabled small-14">Faculty</p>
                  <p className="small-16">{user.faculty?`Faculty of ${user.faculty}`:"N/A"}</p>
                </div>
                <div style={{
                  marginBottom:"15px"
                }}>
                  <p className="text-disabled small-14">Department</p>
                  <p className="small-16">{user.department?user.department:"N/A"}</p>
                </div>
             </div>
           </div>
        </header>
    )
}