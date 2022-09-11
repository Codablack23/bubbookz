import { Image } from "antd";
import Link from "next/link";

function Event({event}){
 return(
    <li className="event-li min-vh-70 card">
<header className="event-image-container bub-bg-accent">
    <Image src={event.img_link} 
    className="w-100" 
    height={"100%"} 
    width={"100%"} 
    layout="responsive" 
    alt="event image" 
    />
</header>
<div className="event-details">
    <h1 className="event-name">{event.name}</h1><br />

    <p className=""><span><i className="bi bi-calendar-event"></i></span> {event.event_date}</p>
    <p className=""><span><i className="bi bi-clock"></i></span>{event.event_time}</p>
    <p className=""><span><i className="bi bi-geo-alt"></i></span>{event.location}</p>

    <div className="event-description">
        <p>
            {`${event.description.slice(0,70)}...`}
           <Link href={`/events/${event.event_id}`} passHref>
           <span className="text-theme read-more">Read More</span>
           </Link>
        </p>
    
    </div>
  </div>
</li>
 )
}

export default function EventList({title,filtered,events}){
    return(
        <div className="event-list-container">
            <header className="events-title flex">
               <h1>{title}</h1>
               <span className="clear-filters">{filtered?(<i>Clear filters</i>):null}</span>
            </header><br />
            <ul className="event-list">
                {events.slice(0,5).map(event=>(
                  <Event event={event} key={event.event_id}/>
                ))}
             
            </ul>
        </div>
    )
}