import { message, Skeleton, Spin } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import NotFound from "~/components/widgets/NotFound"
import Events from "~/helpers/Events"

function LoadingState(){
    return (
        <div className="w-100">
         <div className="bub-mb-5">
            <Skeleton.Button
            active
            block
            style={{height:"200px"}}
            />
         </div>
         <div className="bub-pb-3 w-50">
           <Skeleton.Button
            active
            block
            style={{marginBottom:"10px"}}
            />
            <Skeleton.Button
            active
            block
            style={{marginBottom:"10px"}}
            />
            <Skeleton.Button
            active
            block
            />
         </div>
        </div>
    )
}

export default function Checkout(){
    const Router = useRouter()
    const [loading,setLoading] = useState(true)
    const [isLoading,setIsLoading] = useState(false)
    const [discount,setDiscount] = useState(0)
    const [regDetails,setRegDetails] = useState<any>({})
    const [event,setEvent] = useState<any>({})

    useEffect(() => {
        if(typeof window !== "undefined"){
           const session = window.sessionStorage.getItem("event-registration")
           if(session !== null || session){
            message.warning("Please do not close this tab or window")
            const details = JSON.parse(session)
            setRegDetails(details)
            setEvent(details.event)
           }
        }
        setTimeout(()=>{
            setLoading(false)
        },300)
    }, [])

    async function payForEvent(){
      setIsLoading(true)
      const response = await Events.registerEvent(event.event_id,{
        name:regDetails.name,
        email:regDetails.email,
        phone:regDetails.phone_number,
        total:event.price - discount,
        discount
      })
      setIsLoading(false)
      if(response.status === "success"){
        window.sessionStorage.removeItem("event-registration")
        window.sessionStorage.setItem("ticket",JSON.stringify(response.ticket))
        Router.push(`/events/checkout/ticket/${response.ticket.reg_id}`)
      }else{
        message.error(response.error)
      }
    }
    return(
        <div className="container w-md-90 min-vh-60 flex align-items-center justify-content-center w-80 m-auto" style={{marginTop:"3em"}}>
            {loading ?
            <LoadingState/>
            :Object.entries(regDetails).length > 0 ?(
            <div className="w-100">
            <p 
            className="text-center text-accent-1 w-100 font-a small-24 fw-reg"
            style={{textAlign:"center"}}>
            ORDER SUMMARY
            </p><br /><br />
            <div className="details container bg-accent-1 text-white"
            style={{borderRadius:"7px",paddingTop:"1.5em",paddingBottom:"1.5em"}}>
                <h1 className="small-20 text-white">{regDetails.name}</h1>
                <p>{regDetails.email}</p><br />
                <p >{event.location.toLowerCase() == "online"?"Online event on":""}  {event.name}</p>
                <p style={{marginTop:"10px"}}>{new Date(event.event_date).toDateString()} at {event.event_time}</p>                 
            </div><br /><br /><br />
             <div className="flex justify-content-flex-end">
                
            <div className="card br bub-p-2 w-60 w-md-75 w-md-95">
               <label className="promo d-block">Promo Code</label>
                <div className="w-100">
                    <input type="text" className="promo-input w-60"
                     style={{
                        padding:"0.4em ",
                        outline:"none",
                        borderRadius:"7px",
                        border:" 0.5px solid #e9e9e9"
                        }} />
                    <button className="bg-accent-1 btn-small text-white mw-35 bub-ml-5">Apply</button>
                </div>
                <h1 className='small-24'>Total: <span className="text-theme small-24">N{event.price}</span></h1>
                <div className="">
                    {isLoading ?
                    <button className="btn-small bg-theme mw-60 text-white"><Spin/></button>
                    :<button className="btn-small bg-theme mw-60 text-white" onClick={payForEvent}>Make Payment</button>
                    }
                </div>
             </div>

             </div>
            </div>
            ):(
            <NotFound title={"Checkout Session"}>
              <a onClick={Router.back} className={"bub-text-primary"}>Back</a>
            </NotFound>
            )
       }
        </div>

    )
}
   
