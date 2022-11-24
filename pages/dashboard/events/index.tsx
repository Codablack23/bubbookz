import { message } from "antd";
import { useEffect, useState } from "react";
import SortWidget from "~/components/elements/filter";
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";
import DashboardEvent from "~/components/widgets/dashboard/events";
import Events from "~/helpers/Events";


const testEvents :{ 
    name:string,
    banner_src:string,
    date:string,
    time:string,
    id:any | string,
    location:string,
    eventType:string}[] = [
    {
        banner_src:"/images/events/event2.svg",
        name:"Explore The Metaverse",
        date:new Date().toDateString(),
        time:"11:30",
        id:1,
        location:"online",
        eventType:"ongoing",
    },
    {
        banner_src:"/images/events/event1.svg",
        name:"Explore The Metaverse",
        date:new Date().toDateString(),
        time:"11:30",
        id:1,
        location:"online",
        eventType:"ongoing",
    },
]


export default function DashboardEventsPage():JSX.Element{
  const [subEvents,setSubEvents] = useState<any[]>([])

  const getEvents = async()=>{
    const response = await Events.getSubbedEvents()
    if(response.error){
      return message.error(response.error)
    }
    setSubEvents(response.events)
  }

  useEffect(() => {
    getEvents()
  }, [])
  return(
  <DashboardLayout activePage={"events"}>
    <header className="flex justify-content-space-between align-items-center bub-mb-3">
      <div className="flex align-items-center">
        <p><b>Events ({2})</b></p>
        <button className="btn-smaller bg-theme">
            <i className="bi bi-plus-lg"></i>
        </button>
      </div>
     <div className="w-15 w-md-25 w-sm-50">
     <SortWidget/>
     </div>
    </header>
    {subEvents.length > 0?
   <div className="bub-grid">
      {subEvents.map(event=>(
        <DashboardEvent key={event.event_id} event={event}/>
    ))}
   </div>
   :null}
  </DashboardLayout>
  )
}