import HomeLayout from '~/components/layout/home/HomeLayout'
import SearchBar from '~/components/widgets/events/SearchBar'
import NewsLetter from '~/components/widgets/home/NewsLetter'
import EventList from '~/components/widgets/events/EventList'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import EventsFunction  from '~/helpers/Events'
import Link from 'next/link'
import { Skeleton } from 'antd'



function NotFound({title}){
 return (
  <div className='w-100 min-vh-50 text-center flex justify-content-center align-items-center'>
  <div>
  <Image src={"/images/404.svg"} alt={"not found"} height={"100%"} width={"520px"}/>
  <h3 style={{textTransform:"capitalize"}}>No {title} Available</h3>
  <Link href={"/"}>
  <a className={"bub-text-primary"}>Back Home</a>
  </Link>
  </div>

</div>
 )
}
function LoadingState(){
 return(
  <div className="bub-grid">
  <div className="grid-col-4 grid-col-md-12">
    <div className="bub-mb-2">
    <Skeleton.Avatar
    size={200}
    shape={'square'}
    active
    />
    </div>
    <Skeleton/>
  </div>
  <div className="grid-col-4 grid-col-md-12">
    <div className="bub-mb-2">
    <Skeleton.Avatar
    size={200}
    shape={'square'}
    active
    />
    </div>
    <Skeleton/>
  </div>
  <div className="grid-col-4 grid-col-md-12">
    <div className="bub-mb-2">
    <Skeleton.Avatar
    size={200}
    shape={'square'}
    active
    />
    </div>
    <Skeleton/>
  </div>
</div>
 )
}

export default function Events(){
  
async function populateState(setFunction){
  const response = await EventsFunction.getEvents()
  setIsLoading(false)
 if(response.status && response.status == "success"){
   const {events} = response
   setFunction(events.filter(event=>{
    const eventDate = new Date(event.event_date)
    const currentDate = new Date()
    return eventDate > currentDate
   }))
 }
}
    const [isLoading,setIsLoading] = useState(true)
    const [upcomingEvents,setUpcomingEvents] = useState([])

    useEffect(()=>{
      populateState(setUpcomingEvents)
    },[])
    return(
       <HomeLayout title={"Events"}>
         <header className='events--hero-section'>
            <div className="hero--overlay">
                     <Image src="/images/events/hero_overlay.svg" alt="img" layout='fill'/>
              </div>
             <div className="hero-content container w-40 w-md-70 w-sm-100">
                 <h1 className="hero-heading font-a">What you need is an <span className='font-a text-theme'>Event</span>  to remember for a lifetime.</h1><br />
                 <p className="hero-text">- Rehan Waris</p>
             </div>
         </header>
         <section className="events--container container">
           <SearchBar/><br /><br /><br />
           {isLoading?
           <LoadingState/>
           :upcomingEvents.length > 0? 
              <EventList title={"Upcoming Events"} filtered={false} events={upcomingEvents}/>
              :<NotFound title={"upcoming events"}/> }      
           </section>
        
      
         <div className="load-more container">
         {upcomingEvents.length > 6 && ( <button className="load-more">Load More Events</button>)}
         <p className="text-theme">
           <span className="text-theme">Return to the top</span>
           <span className="text-theme"><i className="bi bi-arrow-up text-theme"></i></span>
         </p>
         </div>
       
        
       <NewsLetter/>
       </HomeLayout>
    )
}