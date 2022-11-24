
import { message, Skeleton } from "antd";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";
import EventTicket from "~/components/widgets/dashboard/EventTicket";
import NotFound from "~/components/widgets/NotFound";
import Events from "~/helpers/Events";

interface Ticket{
  [key:string]:any
}
const LoadingScreen=()=>(
  <div className="">
    <Skeleton
    active={true}
    paragraph={{rows:2}}
    />
    <Skeleton.Button
    block
    active={true}
    size="large"
    style={{height:"100px"}}
    />
  </div>
)
export default function EventDetailPage():JSX.Element{
  const [isLoading,setIsLoading] = useState(true)
  const [ticket,setTicket] = useState<Ticket>({})
  const Router = useRouter()



  useEffect(() => {
    const getTicket = async ()=>{
     if(Router.query.eid !== undefined){
      setIsLoading(true)
      const response = await Events.getEventTicket(Router.query.eid as string)
      setIsLoading(false)
      if(response.error){
        return message.error(response.error)
      }
      console.log(response)
      setTicket(response.ticket)
     }
    }
    getTicket()

  },[Router])

    return(
      <div>
        <DashboardLayout activePage={"events"}>
          {isLoading
          ?<LoadingScreen/>
          :Object.getOwnPropertyNames(ticket).length > 0 ?
          <>
           <p className="fw-bold"><span className="text-disabled">Events</span>{" > "} <span>{ticket.name}</span> </p>
           <br /><br />
          <EventTicket ticket={ticket}/>
          </>
          :<NotFound title="ticket" backLink="/dashboard/events/"/>
          }
        </DashboardLayout>
      </div>
    )
}