import Link from 'next/link'
import { useState } from 'react'
import HomeLayout from '../../../components/layout/home/HomeLayout'

export default function Register(){
    const [showOrderSum,setShowOrderSum] = useState(false)

    const OrderSummary =()=>{
      return(
          <div className="container w-md-90  w-80 m-auto" style={{marginTop:"3em"}}>
              <p 
              className="text-center text-accent-1 w-100 font-a small-24 fw-reg"
              style={{textAlign:"center"}}>
                  ORDER SUMMARY
                </p><br /><br />
              <div className="details container bg-accent-1 text-white"
               style={{borderRadius:"7px",paddingTop:"1.5em",paddingBottom:"1.5em"}}>
                 <h1>Roland James</h1>
                 <p>rowlandjones@gmail.com</p><br />
                 <p >Online event on Explore the metaverse world</p>
                 <p style={{marginTop:"10px"}}>Saturday April 29, 2022 at 2:00 pm - 3:00 pm GMT+1</p>                 
              </div><br /><br /><br />

              <div>
                  <label className="promo d-block">Promo Code</label>
                  <div className="">
                      <input type="text" className="promo-input w-40"
                       style={{
                           padding:"0.4em ",
                           outline:"none",
                           borderRadius:"7px",
                           border:" 0.5px solid #222222"
                           }} />
                      <button className="bg-accent-1 btn-small text-white w-20"
                      style={{marginLeft:"10px"}}
                      >Apply</button>
                  </div><br />
                  <h1 className='small-24'>Total: <span className="text-theme small-24">N500000</span></h1>
                </div><br /><br />
            <div className="text-center">
                <button className="btn bg-theme w-60 text-white">Make Payment</button>
            </div>
          </div>
      )
    }
    return(
        showOrderSum?
            <OrderSummary/>:(
        <div className="event-register-container container" style={{marginTop:"3.5em"}}>
            <div className="flex d-md-block">
                <div className='w-50 w-md-80 m-md-auto w-sm-90'>
                <h1 className="font-a small-24 fw-reg" style={{textAlign:"center"}}>Register for Event</h1><br />

                <form className="attendee-form w-80 m-auto" style={{margin:"auto"}}>
                 <label className="input-label">Name*</label>
                 <div className="input-group">
                 <input type="text" className='w-90' />
                 </div>

                 <label className="input-label">Email*</label>
                 <div className="input-group">
                   <input type="text" className='w-90' />
                 </div>

                 <label className="input-label">Phone Number*</label>
                  <div className="input-group">
                   <select className="side side-left w-20">
                       <option value="+234">+234</option>
                   </select>
                  <input type="text" className='w-80' />
                 </div><br /><br />
                 <p className="small-14"><span><input type="checkbox" id='agree'/></span> I agree to Bubbooks <Link href={"/"}><a className="text-theme small-14">Terms & Conditions</a></Link> and <Link href={"/"}><a className="text-theme small-14">Privacy policy</a></Link></p><br />
                 <button className="btn bg-theme w-100 text-white">Register</button>
                </form>
            </div>

            <div className="event w-50 w-md-80 w-sm-90 m-md-auto">
            <div className="event-cover w-100">
                <img src="/images/events/event3.svg" className="w-100 img-fluid" alt="" />
                <div className="img-overlay">
                 <h1 className="font-a text-white w-100 flex justify-content-space-between" style={{fontWeight:400,fontSize:"24px"}}>Explore the Metaverse World <span>
                 <span style={{marginRight:"5px"}}><i className="bi bi-geo-alt"></i></span>
                     Online
                     </span></h1><br />
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
                  </div><br />
                  <div className="flex justify-content-space-between text-white">
                      
                      <p>
                      <span style={{marginRight:"7px"}}><i className="bi bi-calendar-event"></i></span>
                        Apr 29, Tuesday 2022
                      </p>
                      <p>
                      <span style={{marginRight:"10px"}}><i className="bi bi-clock"></i></span>  
                        11:30 AM
                      </p>

                  </div>
                </div>
                </div>
            </div>
            
            </div>
        </div>
    )
    )
}