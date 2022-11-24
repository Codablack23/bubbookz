import { Image } from "antd"
import Link from "next/link"
type props ={
    event:{
        name:string,
        img_link:string,
        event_date:string,
        event_time:string,
        event_id:any | string,
        location:string,
        [key:string]:string
    }
}

export default function DashboardEvent(props:props):JSX.Element{
    const {event} = props
    return(
        <div className="grid-col-6 
        grid-col-sm-12 
        bg-white card 
        br min-vh-30
        flex align-items-center 
        d-md-block
        justify-content-space-between
        ">
        <div className="w-40 w-md-100 bub-bg-accent vh-30 br">
            <Image src={event.img_link} className="img-fluid vh-30 br" alt="event image"/>
            
        </div>
        <div className="w-55 w-md-100 container-small">
            <p className="bub-text-accent fw-bold">{event.name}</p>
            <p className="small-16 text-disabled bub-mt-1">
                {new Date(event.event_date).toDateString()}
            </p>
            <p className="small-16 text-disabled bub-mt-1">
                {event.event_time}
            </p>
            <p className="small-16 text-disabled bub-mt-1 bub-case-capital">
                {event.location}
            </p>
            <div className="flex align-items-center bub-mt-5 justify-content-space-between">
            {/* <p className="small-16 text-disabled bub-case-capital">
                {event.location}
            </p> */}
            <Link href={`/dashboard/events/${event.ticket_id}`}>
              <a className="small-16 text-theme bub-case-capital">View Ticket</a>
            </Link>
            </div>
        </div>
        </div>
    )
}