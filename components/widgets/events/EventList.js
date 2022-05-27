export default function EventList({title,filtered,events}){
    return(
        <div className="event-list-container">
            <header className="events-title flex">
               <h1>{title}</h1>
               <span className="clear-filters">{filtered?(<i>Clear filters</i>):null}</span>
            </header><br />
            <ul className="event-list">
                {events.map(event=>(
                <li key={event.id} className="event-li min-vh-70 card">
                <header className="event-image-container">
                    <img src={event.img} className="w-100" alt="" />
                </header>
                <div className="event-details">
                    <h1 className="event-name">{event.name}</h1><br />

                    <p className=""><span><i className="bi bi-calendar-event"></i></span> Tuesday April 29th, 2022</p>
                    <p className=""><span><i className="bi bi-clock"></i></span>{event.start_time}</p>
                    <p className=""><span><i className="bi bi-geo-alt"></i></span>{event.location}</p>

                    <div className="event-description">
                        <p>
                         {`${event.information.slice(0,70)}...`}
                        <span className="text-theme read-more">Read More</span>
                        </p>
                    
                    </div>
                    
                </div>
                </li>
                ))}
             
            </ul>
        </div>
    )
}