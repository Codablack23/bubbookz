import { createContext, useEffect, useState } from "react"
import Events from "~/helpers/Events"

export const EventContext = createContext({events:[]})

export default function EventContextProvider({children}){
    const [events,setEvents] = useState([])
    useEffect(()=>{
     const getEvents = async ()=>{
      const response = await Events.getEvents()
      if(response.status && response.status == "success"){
       setEvents(response.events.filter(event=>{
        const eventDate = new Date(event.event_date)
        const currentDate = new Date()
        return eventDate > currentDate
       }))
      }
     }
     getEvents()
    },[])
    return (
     <EventContext.Provider value={{events}}>
        {children}
     </EventContext.Provider>
    )
}