import { Skeleton } from "antd";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import EventTicket from "~/components/widgets/dashboard/EventTicket";
import NotFound from "~/components/widgets/NotFound";
import EventsFunctions from "~/helpers/Events"

function LoadingScreen(){
    return (
        <div className="w-75 w-md-95 w-sm-100" style={{margin:"32px auto"}}>
         <Skeleton
         active
         paragraph={{rows:1}}
         />
        <Skeleton
         active
         paragraph={{rows:5}}
         />
         <Skeleton.Button
         active
         block
         style={{height:"200px",marginBottom:"16px"}}
         />
          <Skeleton
         active
         paragraph={{rows:1}}
         />
        </div>
    )
}
export default function EventCheckoutStatus():JSX.Element{
    const [loading,setLoading] = useState(true)
    const [ticket,setTicket] = useState({})

    const Router = useRouter()
    useEffect(()=>{
        if(typeof window !== "undefined"){
            const session = window.sessionStorage.getItem("ticket")
            if(session !== null || session){
             const details = JSON.parse(session)
             setTicket(details)
             setTimeout(()=>{
                window.sessionStorage.removeItem("ticket")
             },2000)
            console.log(details)
            }
            setLoading(false)
         }
    },[])
    return(
     <div className="container">
       {loading?<LoadingScreen/>
       :Object.entries(ticket).length === 0 ?
       <NotFound title={"ticket session"}>
         <a onClick={Router.back} className={"bub-text-primary"}>Back</a>
       </NotFound>
       :(
        <>
        <p className="fw-reg font-a text-center bub-mt-3 bub-mb-3 small-22">
        <i className="bi bi-check-circle-fill bub-mr-1 bub-text-green small-"></i>
        Registration Successful
        </p>
        <EventTicket ticket={ticket}/>
        </>
       )
       
       }
     </div>
    )
}