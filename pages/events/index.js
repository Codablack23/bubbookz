import HomeLayout from '~/components/layout/home/HomeLayout'
import SearchBar from '~/components/widgets/events/SearchBar'
import NewsLetter from '~/components/widgets/home/NewsLetter'
import EventList from '~/components/widgets/events/EventList'
import { useState, useEffect } from 'react'

async function populateState(setFunction,status){
  const results = await fetch("/api/events")
  const events = await results.json()
  setFunction(events.all.filter(event=>event.status === status))
}

export default function Events(){
    const [upcomingEvents,setUpcomingEvents] =  useState([])
    const [ongoingEvents,setOngoingEvents] = useState([])

    useEffect(()=>{
      populateState(setUpcomingEvents,"upcoming")
      populateState(setOngoingEvents,"ongoing")

      console.log({
        ongoingEvents,
        upcomingEvents
      })
    },[])
    return(
       <HomeLayout title={"Events"}>
         <header className='events--hero-section'>
            <div className="hero--overlay">
                     <img src="/images/events/hero_overlay.svg" alt="" />
              </div>
             <div className="hero-content container w-40 w-md-70 w-sm-100">
                 <h1 className="hero-heading font-a">What you need is an <span className='font-a text-theme'>Event</span>  to remember for a lifetime.</h1><br />
                 <p className="hero-text">- Rehan Waris</p>
             </div>
         </header>
         <section className="events--container container">
           <SearchBar/><br /><br /><br />
           {ongoingEvents.length > 0 && <EventList title={"Ongoing Events"} filtered={false} events={ongoingEvents}/> } 
           {upcomingEvents.length > 0 && <EventList title={"Upcoming Events"} filtered={false} events={upcomingEvents}/> }       
         </section>
        
        <div className="load-more container">
            <button className="load-more">Load More Events</button>
            <p className="text-theme">
              <span className="text-theme">Return to the top</span>
              <span className="text-theme"><i className="bi bi-arrow-up text-theme"></i></span>
            </p>
        </div>


       <NewsLetter/>
       </HomeLayout>
    )
}