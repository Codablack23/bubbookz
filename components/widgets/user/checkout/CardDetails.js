import { useState,useEffect } from "react"

const CardDetails=({isShown,setCardDetails,cardDetails,setIsEditing})=>{
    const [cardHolder,setCardHolder] = useState('')
    const [cardNumber,setCardNumber] = useState('')
    const [cardExpiry,setCardExpiry] = useState('')
    const [cardCVV,setCardCVV] = useState('')
    const [cardType,setCardType] =useState(null)
    const [hasAgreed,setHasAgreed] = useState(false)
  
  
    const handleAddCard =()=> {
      setCardDetails({
        holder:cardHolder,
        number:cardNumber,
        expiry:cardExpiry,
        cvv:cardCVV,
        type:cardType,
        agreed:hasAgreed
      })
      setCardCVV('')
      setCardExpiry('')
      setCardHolder('')
      setCardNumber('')
      setIsEditing(false)
    }
    useEffect(()=>{
     if(cardDetails !== null){
      setCardCVV(cardDetails.cvv)
      setCardExpiry(cardDetails.expiry)
      setCardHolder(cardDetails.holder)
      setCardNumber(cardDetails.number)
      setCardType(cardDetails.type)
     }
    },[cardDetails])
  
    if(isShown){
    return(
      <div className="card-details container-small card w-75 w-sm-100 br bg-white">
    <div className="flex justify-content-space-between">
    <p className="text-accent-1 ">Enter Card Details</p>
    <p 
    style={{cursor:"pointer"}}
    onClick={()=>setIsEditing(false)}
    ><i className="bi bi-x-circle"></i></p>
    </div>
    <br />
  
      <div>
       <label htmlFor="" className="input-label fw-bold">Card Holder Name</label>
       <input type="text"
        value={cardHolder} 
        onChange={(e)=>setCardHolder(e.target.value)} 
        className="input br w-100" />
      </div><br />
      <div>
       <label htmlFor="" className="input-label fw-bold">Card Number</label>
       <input
        type="number" 
        value={cardNumber} 
        onChange={(e)=>setCardNumber(e.target.value)} 
        className="input br w-100" />
      </div><br />
  
      <div className="flex justify-content-space-between align-items-center">
        <div className="w-50">
          <label htmlFor="" className="input-label fw-bold small-14">Expiry Date</label>
          <input
           type="text"
           value={cardExpiry} 
           onChange={(e)=>setCardExpiry(e.target.value)} 
           className="input br w-100" />
        </div>
  
        <div className="w-40">
        <label htmlFor="" className="input-label fw-bold small-14">CVV</label>
        <input 
        type="number"
        maxLength={3}
        value={cardCVV} 
        onChange={(e)=>setCardCVV(e.target.value)} 
        className="input br w-100" />
        </div><br />
      </div><br />
     <div>
       <label htmlFor="" className="input-label fw-bold">Select Card Type</label>
     </div>
     <div className="flex align-items-flex-start"
     style={{margin:'0.8em 0'}}
     >
       <input 
       type="checkbox"
       name=""
       checked={hasAgreed}
       onChange={()=>setHasAgreed(prev=>!prev)}
  
       id="" 
       style={{marginTop:'0.3em'}}
       />
       <p 
       className="small-14"
       style={{marginLeft:'0.5em'}}
       >
       I hereby authorize Bubbooks to debit the said amount in my cart from my selected payment method 
       </p>
     </div>
     <button className="btn w-100 bg-theme" onClick={handleAddCard}>Add Card</button>
     </div>
    )}else{
      return null
    }
  }


  export default CardDetails