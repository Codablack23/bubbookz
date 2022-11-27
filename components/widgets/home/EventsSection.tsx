import {Image} from 'antd'
import { useContext } from 'react'
import { EventContext } from '~/context/EventsContext'

const SampleEvent = ({event})=>(
    <div className="event-cover w-100 card br">
    <Image src={event.img_link} width="100%" className="w-100 img-fluid br" alt="" />
    <div className="img-overlay">
     <h1 className="font-a text-white w-100" style={{fontWeight:400,fontSize:"24px"}}>Explore the Metaverse World <span>
     <span className='bub-case-capital' style={{marginRight:"5px"}}><i className="bi bi-geo-alt"></i></span>
         {event.location}
         </span></h1><br />
      <div className="flex justify-content-center">
         {event.hosts && JSON.parse(event.hosts).map(host=>(
             <div className="w-30 speaker" key={`${host.id}-event-host`}>
             <Image src={host.imageUrl} width={"100px"} height={"100px"} style={{borderRadius:"50%"}} alt="" />
             <h1 className="text-white w-100 speaker-name">
                 {host.hostname}
             </h1>
         </div>
         ))}
      </div>
      <div className="text-white bub-p-1">
          
          <p>
          <span style={{marginRight:"7px"}}><i className="bi bi-calendar-event"></i></span>
           {new Date(event.event_date).toDateString()}
          </p>
          <p>
          <span style={{marginRight:"10px"}}><i className="bi bi-clock"></i></span>  
           {event.event_time}
          </p>

      </div>
    </div>
    </div>
)
export default function EventsSection(){
    const {events} = useContext(EventContext)
    console.log(events)
    return (
        <div className='bub-grid'>
            {(events.length > 0 
                && (Object.getOwnPropertyNames(events[0]).length > 0)?
                 <div className = "event-register-container grid-col-6 grid-col-md-12">
                    <SampleEvent event={events[0]}/>
                 </div>
                :null
             )
            }
            <div className="grid-col-6 grid-col-md-12 bub-launch">
                {/* <Image src={"/images/launch.svg"} layout="responsive" width={"100%"} height="100%" alt="bubbookz-launch"/> */}
                <div className="text text-center bub-text-white">
                   <div>
                   <h5 className='font-a bub-text-white'>Bubbooks</h5>
                    <p>Official Launch</p>
                   </div>
                </div>
                <div className="action bub-p-2 card">
                     <button className="learn-more">Learn More</button>
                </div>
            </div>
        </div>
    )
}