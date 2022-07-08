import Link from "next/link"
import Image from "next/image"
type props ={
    event:{
        name:string,
        banner_src:string,
        date:string,
        time:string,
        id:any | string,
        location:string,
        eventType:string,
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
            <img src={event.banner_src} className="img-fluid vh-30 br" alt="event image"/>
            
        </div>
        <div className="w-55 w-md-100 container-small">
            <p className="bub-text-accent fw-bold">{event.name}</p>
            <p className="small-16 text-disabled bub-mt-1">
                {event.date}
            </p>
            <p className="small-16 text-disabled bub-mt-1">
                {event.time}
            </p>
            <p className="small-16 text-disabled bub-mt-1 bub-case-capital">
                {event.location}
            </p>
            <div className="flex align-items-center bub-mt-5 justify-content-space-between">
            <p className="small-16 text-disabled bub-case-capital">
                {event.eventType}
            </p>
            <Link href={"/"}>
              <a className="small-16 text-theme bub-case-capital">View Ticket</a>
            </Link>
            </div>
        </div>
        </div>
    )
}