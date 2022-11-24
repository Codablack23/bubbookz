import { Image, message, Modal, Skeleton, Spin } from 'antd'
import Link from 'next/link'
import EventsFunctions from '~/helpers/Events'
import { useRouter } from 'next/router'
import { MouseEventHandler, useContext, useEffect, useState } from 'react'
import NotFound from '~/components/widgets/NotFound'
import { validateFields } from '~/helpers/validator'
import { AuthContext } from '~/context/auth/AuthContext'


function LoadingState(){
    function generateSkeleton(amount){
        return new Array(amount).fill("").map((skeleton,i:number)=>
         <div key={`${i}-skeleton-index`} className={"bub-mb-2"}>
            <Skeleton.Input
            block
            active
            />
         </div>
        )
    }
    return(
        <div className='bub-grid'>
            <div className="grid-col-6 grid-col-md-12">
             {generateSkeleton(5)}
            </div>
            <div className="grid-col-6 grid-col-md-12">
             <Skeleton.Button
             block
             active
             style={{height:"300px"}}
             />
            </div>
        </div>
    )
}
interface Event{
    
    [key:string]:any
}
function EventDetailCard({event}:{event:Event}){
   return (
    <div className="event-cover w-100 card">
           <Image src={event.img_link} width="100%" className="w-100 img-fluid" alt="" />
           <div className="img-overlay">
            <h1 className="font-a text-white w-100 flex justify-content-space-between" style={{fontWeight:400,fontSize:"24px"}}>Explore the Metaverse World <span>
            <span style={{marginRight:"5px"}}><i className="bi bi-geo-alt"></i></span>
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
             </div><br />
             <div className="flex justify-content-space-between text-white">
                 
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
}
interface Error{
    name:string,
    email:string,
    phone_number:string
    [key:string]:any
}
function ErrMessage({message}:{message:string}){
    return(
     <>
        <div
        className="bub-mt-2 bubt-mb-4 card bub-text-red flex align-items-center" 
        style={{
        borderLeft:"2px solid red",
        transition:"all ease 0.4s",
        overflow:"hidden",
        minHeight:`${message?"30px":0}`,
        maxHeight:`${message?"35px":0}`
        }}>
        <p className='small-13 bub-p-2'> {message.replace("_"," ")}</p>
        </div>
        {message && <br />}
     </>
    )
}
function EventRegisterForm({event}){
    const router = useRouter()
    const {state} = useContext(AuthContext)
    const [phone,setPhone] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [errors,setErrors] = useState<Error>({
        name:"",
        email:"",
        phone_number:""
    })
 

    function inputHandler(action:(value:any)=>any){
        return (e:Event)=>action(e.target.value)
    }
    async function handleSubmit(e:Event){
        e.preventDefault()
        const fieldError = validateFields([
            {inputField:name,inputType:"text",inputName:"Name"},
            {inputField:email,inputType:"email"},
            {inputField:phone,inputType:"phone",inputName:"Phone_Number"}
        ])
        const errObj:Error={
            name:"",
            email:"",
            phone_number:""
        }
        for (const err of fieldError) {
            errObj[err.field] = err.error
        }
        setErrors(errObj)
        if(fieldError.length === 0){
          const userData = {
            name,
            email,
            phone_number:`+234${phone}`,
            status:"pending"
          }
          window.sessionStorage.setItem("event-registration",JSON.stringify({
            ...userData,
            event:{
                name:event.name,
                event_id:event.event_id,
                price:event.price,
                location:event.location,
                event_time:event.event_time,
                event_date:event.event_date
            },

          }))
          router.push(`/events/checkout/`)
        }
        
    }
    
        useEffect(()=>{
            if(state){
                if(state.isLoggedIn){
                    setName(`${state.user.first_name} ${state.user.last_name}`)
                    setEmail(state.user.email)
                }
                else{
                    message.info("You are not Logged In")
                    setTimeout(()=>{
                       router.push(`/user/login?redirect=${router.asPath}`)
                    },3000)
                }
            }
        },[state,router])
    return (
    <form className="attendee-form w-90 w-sm-100 bub-p-2 m-auto card" style={{margin:"auto"}}>
       
        <label className="input-label">Name*</label>
        <div className="input-group">
        <input 
        type="text"
        value={name}
        onChange={inputHandler(setName)}
        className='w-90' />
        </div>
        <ErrMessage message={errors.name}/>

        <label className="input-label">Email*</label>
        <div className="input-group">
        <input 
        type="text" 
        style={{cursor:"not-allowed"}}
        value={email}
        readOnly
        className='w-90 bub-text-light-grey' />
        </div>
        <ErrMessage message={errors.email}/>

        <label className="input-label">Phone Number*</label>
        <div className="input-group">
        <select className="side side-left w-20">
            <option value="+234">+234</option>
        </select>
        <input 
        type={"no"}
         className='w-80' 
        value={phone}
        onChange={inputHandler(setPhone)}
        />
        </div>
        <ErrMessage message={errors.phone_number}/>
        <br /><br />
        <p className="small-14"><span><input type="checkbox" id='agree'/></span> I agree to Bubbooks <Link href={"/"}><a className="text-theme small-14">Terms & Conditions</a></Link> and <Link href={"/"}><a className="text-theme small-14">Privacy policy</a></Link></p><br />
        <button 
        className="btn bg-theme w-100 text-white"
        onClick={handleSubmit}
        >Register</button>
    </form>
    )
}

export default function Register(){
    const router = useRouter()
    const [event,setEvent] = useState<Event>({})
    const [loading,setLoading] = useState(true)

    async function getEvent(){
        if(router.query.eid){
            const response = await EventsFunctions.getEvent(router.query.eid as string)
            setLoading(false)
            if(response.status === "success"){
                setEvent(response.event)
            }
        }
    }
  
   useEffect(()=>{
     getEvent()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[router])
    return(
        <div className="event-register-container container" style={{marginTop:"3.5em"}}>
          {loading ?
          <LoadingState/>
          :Object.entries(event).length > 0?
           (  <div className="bub-grid">
           <div className='grid-col-6 grid-col-md-12 bub-p-md-2'>
           <h1 className="font-a bub-text-primary small-24 fw-reg" style={{textAlign:"center"}}>
             Register For Event
           </h1><br />
           <EventRegisterForm event={event}/>
       </div>

       <div className="event grid-col-6 grid-col-md-12 bub-p-md-2">
          <EventDetailCard event={event}/>
       </div>
       
       </div>)
          :(<NotFound title={"Event"}/>)
          }
        </div>
    )
}