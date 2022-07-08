import { useEffect, useState } from "react"
import AddressDetails from "./AddressDetails"
import CardDetails from './CardDetails'


export default function CheckoutDetails(){

  const [addressDetails, setAddressDetails] = useState(null)
  const [pickUpLocation,setPickUpLocation] = useState(null)
  const [isEditingAddress,setIsEditingAddress] = useState(false)
  const [isEditingLocation,setIsEditingLocation] = useState(false)
  const [deliveryMethod,setDeliveryMethod] = useState(null)
  const [paymentMethod,setPaymentMethod] = useState(null)
  const [cardDetails,setCardDetails] = useState(null)
  const [isEditing,setIsEditing] = useState(false)

  function selectPickUpLocation(e){
       setPickUpLocation(e.target.value)
       console.log(pickUpLocation)
       setIsEditingLocation(false)
  }
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
                {deliveryMethod ==="door-delivery" &&  addressDetails !== null ? 
                <i 
                className="text-disabled bi bi-pencil"
                onClick={()=>{setIsEditingAddress(prev=>!prev)}}
                ></i>:null}
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
              onClick={()=>{setIsEditingAddress(true)}}
              style={{
                  margin:"0.6em 0",
                  cursor:"pointer",
                  display:
                  addressDetails === null &&
                  deliveryMethod === "door-delivery" &&
                  !isEditingAddress
                  ?"block":"none"
            
              
              }}
              >Add an Address</p>
              {addressDetails !== null && !isEditingAddress && (
                <p className="bub-mt-3 bub-case-capital fw-bold">{addressDetails.address}, {addressDetails.city}, {addressDetails.state} state</p>
              )}
            </div>
          </div>
          {isEditingAddress && deliveryMethod === "door-delivery" && (
          <AddressDetails 
          addAddress={setAddressDetails}
          showEditor ={setIsEditingAddress}
          fullAddress = {addressDetails}
          />)}
          <br />
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
                  cursor:"pointer",
                  display:
                  pickUpLocation === null &&
                  deliveryMethod === "pickup" &&
                  !isEditingLocation
                  ?"block":"none"
              
              }}
              onClick={()=>setIsEditingLocation(true)}
              >Select a pickup station</p>
            </div>
            <p style={{marginLeft:"auto",cursor:"pointer"}}>{deliveryMethod ==="pickup" &&  pickUpLocation !== null ? 
                <i 
                className="text-disabled bi bi-pencil"
                onClick={()=>{setIsEditingLocation(prev=>!prev)}}
                ></i>:null}
           </p>
          </div>
          {isEditingLocation === true && deliveryMethod === "pickup" && (
            <form action="" className="container-small">
            <p className="fw-bold bub-mb-1">Select pick up station</p>
            <div className="input-group">
              <select name="" value={pickUpLocation} onChange={selectPickUpLocation} id="" className="w-95">
                <option value={null}>Select</option>
                <option value="Ofrima">Ofrima</option>
              </select>
            </div>
            </form>
          )}
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
            {cardDetails === null || isEditing || paymentMethod !=='card'?
            null
            :<p 
            className="text-accent-1 fw-bold"
            style={{marginTop:"0.7em"}}
            >{cardDetails.number}</p>}
          </div>
        </div>
      </div>
      {paymentMethod ==="card" && (isEditing || cardDetails === null) && (
          <CardDetails 
            setIsEditing={setIsEditing}
            cardDetails = {cardDetails}
            setCardDetails={setCardDetails}/>
      )}
      <br />
      <hr /><br />
      <div className="delivery-method flex align-items-flex-start">
        <label 
          className="delivery-method-checkbox"
          onClick={()=>{setPaymentMethod('pay-on-delivery')}}
          htmlFor="checkbox">
          {paymentMethod ==="pay-on-delivery"?<div className="w-100 bg-theme"></div>:null}
        </label>
          <p style={{marginLeft:"1em"}}>Cash on Delivery</p>
      </div><br />
    </div>
  </>
  )
}