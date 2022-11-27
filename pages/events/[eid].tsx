import HomeLayout from "../../components/layout/home/HomeLayout";
import {useRouter} from 'next/router'
import NewsLetter from "~/components/widgets/home/NewsLetter";
import Link from "next/link";
import Image from 'next/image'
import EventList from "~/components/widgets/events/EventList";
import { useState,useEffect } from "react";
import { Skeleton } from "antd";
import Events from "~/helpers/Events";
import NotFound from "~/components/widgets/NotFound";


function LoadingState(){
  return(
    <div className="bub-p-3">
      <div className="bub-grid bub-mt-5">
        <div className="grid-col-6 grid-col-md-12">
           <Skeleton.Avatar
           active
           shape="square"
           size={250}
           /><br/>
           <Skeleton
           className="bub-mt-2"
           active
           paragraph={{rows:6}}
           />
        </div>
        <div className="grid-col-6 grid-col-md-12">
           <Skeleton
           active
           paragraph={{rows:6}}
           />
        </div>
      </div>
      <div>
           <Skeleton
            className="bub-mt-2"
           active
           paragraph={{rows:6}}
           />
        </div>
    </div>
  )
}

export function EventDetail({event}){
    const eventHosts = event.hosts || event.hosts !== null ?JSON.parse(event.hosts):[]
   
    console.log(eventHosts)
    return(
   <div>
    <div className="event-detail-hero container">
        <Image src={event.img_link} layout="fill" alt="event banner" />
        <Image layout="fill" src="/images/events/hero_overlay.svg" alt="event baner" />
        <div className="hero-content w-40 w-md-80 w-sm-90 w-sm-90">
            <h1 className="font-a">{event.name}</h1><br />
        </div>
    </div>
    <div className="container">
    <div className="event-detail-container flex d-md-block justify-content-space-between" style={{marginTop:"1.2em"}}>
    <div className="event-info w-50 w-md-80 m-md-auto">
        <div className="event-cover w-100">
        <Image src={event.img_link} layout="fill" height={"100%"} width={"100%"} alt="host image"/>
        <div className="img-overlay">
            <h1 className="font-a text-white w-100" style={{fontWeight:400,fontSize:"26px"}}>{event.name}</h1><br />
            <div className="flex justify-content-space-between d-md-none">
               {/* {eventHosts.length > 0 && (
                eventHosts.map((host)=>
                    <div className="w-25 speaker" key={`host-${host.id}`}>
                    <Image src={host.imageUrl} layout="responsive" height={"100%"} width={"100%"} className="w-60 speaker-img" alt="" />
                    <h1 className="text-white w-100 speaker-name">
                       {host.hostname}
                    </h1>
                </div>
                )
               )} */}
            </div>
        </div>
        </div><br />
        <div className="infomation">
            <h1 className="small-24" style={{lineHeight:"28.13px"}}>Event Information</h1><br />
            <p className="small-16">{event.description}</p>
        </div>
    </div><br />

    <div className="location-details w-40 w-md-80 w-sm-90 m-md-auto min-vh-20">
        <div className="card w-100" style={{padding:"0.8em",textAlign:"center",borderRadius:"7px"}}>
           <Link href={`/events/register/${event.event_id}`} passHref>
           <button className="bg-theme text-white btn w-90"
            style={{minHeight:"5vh"}}
            >Register</button>
           </Link>

        </div><br />
        <div className="card w-100" style={{padding:"1.2em 0.8em",borderRadius:"7px"}}>
            <p className="label small-14"style={{color:"#8E8E8E",marginBottom:"0.7em"}} >Date:</p>
            <p className="small-16"><span style={{marginRight:"10px"}}><i className="bi bi-calendar-event"></i></span>{new Date(event.event_date).toDateString()}</p>
            <br />

            <p className="label small-14"style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Location:</p>
            <p className="small-16"><span style={{marginRight:"10px"}}><i className="bi bi-geo-alt"></i></span>{event.location}</p><br />

            <p className="label small-14" style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Time:</p>
        <p className="small-16"><span style={{marginRight:"10px"}}><i className="bi bi-clock"></i></span>{event.event_time}</p><br />


        <p className="label small-14" style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Price:</p>
        <p className="small-16"><span>N</span>{event.price}</p><br />

        <p className="label small-14"  style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Share With Friends</p><br />
        
        <div className="social-links flex justify-content-space-between w-100 w-md-80">
            <Link href={"/"}>
                <a className="link text-white small-14 w-30 flex" style={{background:"#3A559F"}}>
                    <span className="text-white" style={{marginRight:"10px"}}>
                        <i className="bi bi-facebook text-white"></i>
                    </span>
                    Facebook
                </a>    
            </Link>
            <Link href={"/"}>
                <a className="link text-white small-14 w-30 flex" style={{background:"#50ABF1"}}>
                    <span className="text-white" style={{marginRight:"10px"}}>
                        <i className="bi bi-twitter text-white"></i>
                    </span>
                    Twitter
                </a>    
            </Link>
            <Link href={"/"}>
                <a className="link text-white flex w-30 small-14" style={{background:"#1BD741"}}>
                    <span className="text-white" style={{marginRight:"10px"}}>
                        <i className="bi bi-whatsapp text-white"></i>
                    </span>
                    Whatsapp
                </a>    
            </Link>
        </div><br />

        <div className="event-link">
            <p className="text small-14">{event.registration_link}</p>
            <button>
                <span><i className="bi bi-files"></i></span>
            </button>
        </div>
        </div>
    </div>

    </div>

    <div className="meet-speakers-section w-md-80 w-sm-90 m-md-auto">
        <h1 className="font-a fw-reg" style={{color:"#22323F"}}>Meet Our Speakers</h1><br />
        <div className="bub-grid">
        {eventHosts.length > 0 && (
                eventHosts.map((host)=>
                <div key={`speaker-${host.id}`} className="grid-col-4 min-vh-60 grid-col-md-12">
                <div className="w-100 min-vh-40" style={{background:"#22323F",borderRadius:"7px",padding:"1.2em 2.5em"}}>
                    <div style={{textAlign:"center",padding:"0.9em",paddingTop:"1em"}}>
                    <Image style={{borderRadius:"50%"}} src={host.imageUrl} className="w-80 speaker-img" width={130} height={130} alt="" />
                    </div><br />
                    <p className="text-white small-16 text-center">{host.hostname}</p>
                    <p className="text-white  small-13">{host.desc}</p>     
                </div>
                </div>
                )
               )}
          
        </div>
    </div>
    </div>
    {/* <div className="container" style={{background:'#f9f9f9'}}>
        <EventList title={"Events you may like"} filtered={false} events={events}/>
    </div> */}
    </div>
    )
}

export default function EventPage(){
    const params = useRouter()
    const [event,setEvent] = useState({})
    const [isLoading,setIsLoading] = useState(true)

  
    useEffect(() => {
        async function getEvent(){
            if(params){
             const response = await Events.getEvent(params.query?.eid as string)
             setIsLoading(false);
             if(response.status == "success"){
                console.log(response.event)
                setEvent(response.event)
             }
             console.log(response)
            }
        }
        getEvent()
    }, [params])
    return(
        <div>
            <HomeLayout title={isLoading?"Loading":1}>
             {isLoading?
             <LoadingState/>
             :Object.entries(event).length > 0?
             <EventDetail event={event}/>
             :<NotFound title={"event"}/>}
             <NewsLetter/>
            </HomeLayout>
        </div>
    )
}
