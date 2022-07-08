import { useState } from "react";
import SortWidget from "~/components/elements/filter";
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";
import Community from "~/components/widgets/dashboard/community";



export default function DashboardCommunity():JSX.Element{
    const [isActive, setIsActive] = useState("created")

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
         <p className="fw-bold bub-text-dark">Communities You Have {isActive === "joined"?"Joined":"Created"} (3)</p>
         <button className="btn-small bg-theme">
            <i className="bi bi-plus-lg"></i>
         </button>
         </div>
        <div className="w-15 w-md-30 w-sm-50">
         <SortWidget/>
        </div>
       </div><br />
       <section className="bub__dashboard-communities">
        <Community isActive={isActive}/>
       </section>
     </DashboardLayout>
    )
}