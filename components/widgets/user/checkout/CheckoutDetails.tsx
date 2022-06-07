import { useEffect, useState } from "react"
import CardDetails from './CardDetails'


export default function CheckoutDetails(){
    const [deliveryMethod,setDeliveryMethod] = useState(null)
    const [paymentMethod,setPaymentMethod] = useState(null)
    const [cardDetails,setCardDetails] = useState(null)
    const [isEditing,setIsEditing] = useState(false)
     return(
         <>
          <div className="checkout-detail min-vh-20">
                      <header className="w-100 flex align-items-center justify-content-space-between">
                          <p className="text-disabled small-16">YOUR DETAILS</p>
                          <button
                          style={{
                              border:'none',
                              background:"none",
                              cursor:"pointer"
                          }}
                          >
                            <i className="text-disabled bi bi-pencil"></i>
                          </button>
                      </header>
                      <div style={{margin:"0.5em 0"}}>
                          <p className="fw-bold small-24">Roland James</p><br/>
                          <p className="small-16">+234 813 267 5894</p>
                      </div>
                    </div>

                    <div className="checkout-detail">
                         <p className="text-disabled small-16">SELECT A DELIVERY METHOD</p><br />
                     <div className="delivery-method flex align-items-flex-start">
                       <label 
                         className="delivery-method-checkbox"
                         onClick={()=>{setDeliveryMethod('door-delivery')}}
                         htmlFor="checkbox">
                         {deliveryMethod ==="door-delivery"?<div className="w-100 bg-theme"></div>:null}
                        </label>
                        <div style={{marginLeft:"1em"}}>
                            <header className="flex align-items-center">
                             <p>Door Delivery</p>
                             <p style={{marginLeft:"auto",cursor:"pointer"}}>
                             {deliveryMethod ==="door-delivery"? <i className="text-disabled bi bi-pencil"></i>:null}
                              
                               </p>
                            </header>
                             <p 
                             className="small-14 text-disabled w-60 w-md-85 w-sm-95"
                             style={{marginTop:'0.5em'}}
                             >
                              Your book orders will be delivered to your door step. You will be charged an extra fee for door delivery.
                            </p>
                            <p 
                            className="text-theme small-16"
                            style={{
                                margin:"0.6em 0",
                                cursor:"pointer"
                            
                            }}
                            >Add an Address</p>
                         </div>
                       </div><br />
                       <hr /><br />
                       <div className="delivery-method flex w-100 align-items-flex-start">
                       <label 
                         className="delivery-method-checkbox"
                         onClick={()=>{setDeliveryMethod('pickup')}}
                         htmlFor="checkbox">
                         {deliveryMethod ==="pickup"?<div className="w-100 bg-theme"></div>:null}
                        </label>
                        <div style={{marginLeft:"1em"}}>
                             <p>Pickup Station</p>
                             <p 
                             className="small-14 text-disabled"
                             style={{marginTop:'0.5em'}}
                             >
                            This offers a cheaper shipping fee than door delivery.
                            </p>
                            <p 
                            className="text-theme small-16"
                            style={{
                                margin:"0.6em 0",
                                cursor:"pointer"
                            
                            }}
                            >Select a pickup station</p>
                         </div>
                       </div>
                    </div>
               
                 <div className="checkout-detail min-vh-20">
                     <p className="text-disabled small-16">SELECT PAYMENT METHOD</p><br />
                     <div className="delivery-method flex align-items-flex-start">
                      <label 
                        className="delivery-method-checkbox"
                        onClick={()=>{setPaymentMethod('card')}}
                        htmlFor="checkbox">
                        {paymentMethod ==="card"?<div className="w-100 bg-theme"></div>:null}
                      </label>
                       <div className="w-90"  style={{marginLeft:"1em"}}>
                       <header className="flex justify-content-space-between w-100">
                        <p>Credit Card</p>
                        <p 
                        style={{marginLeft:"auto",cursor:"pointer"}}
                        >
                           {
                           paymentMethod ==="card"? 
                           <>
                            {cardDetails !== null?
                              <i className="text-disabled bi bi-pencil" onClick={()=>setIsEditing(true)}></i>
                            :null}
                           </>
                           :null
                           }
                           
                        </p>
                       </header>
                       <div>
                         {cardDetails === null || isEditing?
                          null
                         :<p 
                         className="text-accent-1 fw-bold"
                         style={{marginTop:"0.7em"}}
                         >{cardDetails.number}</p>}
                       </div>
                      </div>
                    </div>
                    {paymentMethod ==="card"?
                       <div className="w-100">
                         <br />
                        <CardDetails 
                         setIsEditing={setIsEditing}
                         cardDetails = {cardDetails}
                         isShown={cardDetails === null || isEditing}
                         setCardDetails={setCardDetails}/>
                       </div>:null}
                    <br />
                    <hr /><br />
                    <div className="delivery-method flex align-items-flex-start">
                      <label 
                        className="delivery-method-checkbox"
                        onClick={()=>{setPaymentMethod('pay-on-delivery')}}
                        htmlFor="checkbox">
                        {paymentMethod ==="pay-on-delivery"?<div className="w-100 bg-theme"></div>:null}
                      </label>
                        <p style={{marginLeft:"1em"}}>Pay on Delivery</p>
                    </div><br />
                 </div>
        </>
     )
}