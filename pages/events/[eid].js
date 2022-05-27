import HomeLayout from "../../components/layout/home/HomeLayout";
import {useRouter} from 'next/router'
import NewsLetter from "~/components/widgets/home/NewsLetter";
import Link from "next/link";
import Image from 'next/image'
import EventList from "~/components/widgets/events/EventList";

const events=[
    {
        id:7,
        name:"African Art",
        img:"/images/events/event7.svg",
        location:"online",
        information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
        price:"5000",
        start_tim:"2:00PM",
        end_time:"3:00PM",
        status:"upcoming",
        speakers:[
          {
            "profile_img":"",
            "name":"",
            "info":"",
            "title":"",
            "social_links":""
          }
        ]
        
      
      },
      {
        id:8,
        name:"Women in Tech Convention",
        img:"/images/events/event8.svg",
        location:"online",
        information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
        price:"5000",
        start_time:"2:00PM",
        end_time:"3:00PM",
        status:"upcoming",
        speakers:[
          {
            profile_img:"",
            name:"",
            info:"",
            title:"",
            social_links:""
          }
        ]
        
      
      },
      {
        "id":9,
        "name":"Designers and Developers Meet",
        img:"/images/events/event9.svg",
        location:"online",
        information:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...",
        price:"5000",
        start_time:"2:00PM",
        end_time:"3:00PM",
        status:"upcoming",
        speakers:[
          {
            profile_img:"",
            name:"",
            info:"",
            title:"",
            social_links:""
          }
        ]
        
      
      }
]


export default function EventPage({eid}){
    const params = useRouter()
    return(
        <div>
            <HomeLayout title="page">
              <div className="event-detail-hero container">
                 <img src="/images/events/event3.svg" alt="" />
                 <img src="/images/events/hero_overlay.svg" alt="" />
                 <div className="hero-content w-40 w-md-80 w-sm-90 w-sm-90">
                     <h1 className="font-a">Explore the <br /> Metaverse World</h1><br />
                 </div>
              </div>
             <div className="container">
              <div className="event-detail-container flex d-md-block justify-content-space-between" style={{marginTop:"1.2em"}}>
                <div className="event-info w-50 w-md-80 m-md-auto">
                    <div className="event-cover w-100">
                    <img src="/images/events/event3.svg" className="w-100 img-fluid" alt="" />
                    <div className="img-overlay">
                     <h1 className="font-a text-white w-100" style={{fontWeight:400,fontSize:"26px"}}>Explore the Metaverse World</h1><br />
                      <div className="flex justify-content-space-between">
                          <div className="w-30 speaker">
                              <img src="/images/events/profile1.svg" className="w-80 speaker-img" alt="" />
                              <h1 className="text-white w-100 speaker-name">
                                  Kenny D.
                              </h1>
                          </div>
                          <div className="w-30 speaker">
                              <img src="/images/events/profile2.svg" className="w-80 speaker-img" alt="" />
                              <h1 className="text-white w-100 speaker-name">
                                  Jackie J.
                              </h1>
                          </div>
                          <div className="w-30 speaker">
                              <img src="/images/events/profile3.svg" className="w-80 speaker-img" alt="" />
                              <h1 className="text-white w-100 speaker-name">
                                  Laurel B.
                              </h1>

                          </div>
                      </div>
                    </div>
                    </div><br />
                    <div className="infomation">
                        <h1 className="small-24" style={{lineHeight:"28.13px"}}>Event Information</h1><br />
                        <p className="small-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                         Lorem Ipsum has been the  standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type 
                         specimen book.It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in 
                         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                         and more recently with desktop publishing software like Aldus PageMaker including
                         versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                         industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged. It was popularised in the 1960s with the release of 
                         Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                         software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div><br />

                <div className="location-details w-40 w-md-80 w-sm-90 m-md-auto min-vh-20">
                    <div className="card w-100" style={{padding:"0.8em",textAlign:"center",borderRadius:"7px"}}>
                        <button className="bg-theme text-white btn w-90"
                        style={{minHeight:"5vh"}}
                        >Register</button>
                    </div><br />
                    <div className="card w-100" style={{padding:"1.2em 0.8em",borderRadius:"7px"}}>
                     <p className="label small-14"style={{color:"#8E8E8E",marginBottom:"0.7em"}} >Date:</p>
                     <p className="small-16"><span style={{marginRight:"10px"}}><i className="bi bi-calendar-event"></i></span> Tuesday April 29th, 2022</p>
                     <br />

                     <p className="label small-14"style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Location:</p>
                     <p className="small-16"><span style={{marginRight:"10px"}}><i className="bi bi-geo-alt"></i></span>Online</p><br />

                     <p className="label small-14" style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Time:</p>
                    <p className="small-16"><span style={{marginRight:"10px"}}><i className="bi bi-clock"></i></span>11:30AM - 12:30PM</p><br />


                    <p className="label small-14" style={{color:"#8E8E8E",marginBottom:"0.7em"}}>Price:</p>
                    <p className="small-16"><span>N</span>5000</p><br />

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
                        <p className="text small-14">https://www.figma.com/file/rICwzvtXfD410XX</p>
                        <button>
                            <span><i className="bi bi-files"></i></span>
                        </button>
                    </div>
                    </div>
                </div>

              </div>

              <div className="meet-speakers-section w-md-80 w-sm-90 m-md-auto">
                  <h1 className="font-a fw-reg" style={{color:"#22323F"}}>Meet Our Speakers</h1><br />
                  <div className="row">
                     <div className="col-4 col-md-12">
                       <div className="w-100 min-vh-40" style={{background:"#22323F",borderRadius:"7px",padding:"1.2em 2.5em"}}>
                          <div style={{textAlign:"center",padding:"0.9em",paddingTop:"1em"}}>
                          <Image src="/images/events/profile1.svg" className="w-80 speaker-img" width={130} height={130} alt="" />
                          </div><br />
                          <p className="text-white">
                          Kenny D is a Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p> 
                         <br /><br />

                        <p className="text-white small-16">Connect With Kenny on <Link href={"/"}><a className="text-theme small-16">LinkedIn</a></Link></p>

                      </div>
                     </div>
                     <div className="col-4 col-md-12">
                       <div className="w-100 min-vh-40" style={{background:"#22323F",borderRadius:"7px",padding:"1.2em 2.5em"}}>
                       <div style={{textAlign:"center",padding:"0.9em",paddingTop:"1em"}}>
                          <Image src="/images/events/profile2.svg" className="w-80 speaker-img" width={130} height={130} alt="" />
                          </div><br />
                          <p className="text-white">
                          Jackie J. is a Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </p>  
                          <br /><br />
                          <p className="text-white small-16">Connect With Jackie on <Link href={"/"}><a className="text-theme small-16">LinkedIn</a></Link></p>

                      </div>
                     </div>
                     <div className="col-4 col-md-12">
                       <div className="w-100 min-vh-40" style={{background:"#22323F",borderRadius:"7px",padding:"1.2em 2.5em"}}>
                        <div style={{textAlign:"center",padding:"0.9em",paddingTop:"1em"}}>
                          <Image src="/images/events/profile3.svg" className="w-80 speaker-img" width={130} height={130} alt="" />
                        </div><br />
                        <p className="text-white">
                        Laura Brown is a Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <br /><br />

                        <p className="text-white small-16">Connect With Laura on <Link href={"/"}><a className="text-theme small-16">LinkedIn</a></Link></p>

                      </div>
                     </div>
                  </div>
              </div>
             </div>
             <div className="container" style={{background:'#f9f9f9'}}>
                   <EventList title={"Events you may like"} filtered={false} events={events}/>
               </div>
             <NewsLetter/>
            </HomeLayout>
        </div>
    )
}
