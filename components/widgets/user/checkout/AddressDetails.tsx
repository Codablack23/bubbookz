import { useEffect, useState } from "react"

export default function AddressDetails({addAddress,showEditor,fullAddress}):JSX.Element{
    const [address,setAddress] = useState("")
    const [addressState,setAddressState] = useState("")
    const [addressCity,setAddressCity] = useState("")


   function handleSubmit(e){
     e.preventDefault()
      addAddress({
        address,
        state:addressState,
        city:addressCity
      })
      setAddress("")
      setAddressCity("")
      setAddressState("")

      showEditor(false)
   }

   useEffect(()=>{
    if(fullAddress !== null){
      setAddress(fullAddress.address)
      setAddressCity(fullAddress.city)
      setAddressState(fullAddress.state)
    }
   },[fullAddress])
    return(
        <form onSubmit={handleSubmit} className="card container-small br w-75 w-md-85 w-sm-100 bub-mt-2">
            <header className="flex justify-content-space-between bub-mb-3">
              <p className="fw-bold">Edit Address</p>
              <p style={{cursor:"pointer"}} onClick={()=>{showEditor(false)}}>
                <i className="bi bi-x-circle"></i>
              </p>
            </header>
            <p className="text-center text-theme bub-mb-2 small-14"  style={{cursor:"pointer"}}>Choose from your address book</p>
            <div className="flex align-items-center justify-content-space-between bub-mb-2">
                <hr className="w-45" />
                <span className="text-disabled small-14">Or</span>
                <hr className="w-45" />
            </div>
            <p className="text-center text-disabled small-14">Enter Manually</p>

            <label htmlFor="Address" className="input-label">Address</label>
            <input 
            type="text" 
            className="input w-100"
            value={address}
            onChange = {(e)=>setAddress(e.target.value)}
            />

            <label htmlFor="Address" className="input-label">State</label>
            <div className="input-group">
             <select 
               name="" className="w-95" id=""
               value={addressState}
               onChange = {(e)=>setAddressState(e.target.value)}
             >
              <option value="">Select</option>
              <option value="rivers">Rivers</option>
             </select>
            </div>

           
            <label htmlFor="Address" className="input-label">City</label>
            <div className="input-group">
             <select 
             name=""
             className="w-95" id=""
             value={addressCity}
             onChange = {(e)=>setAddressCity(e.target.value)}
             >
              <option value="">Select</option>
              <option value="port harcourt">Port Harcourt</option>
             </select>
            </div>
            <br />
          
            <div className="flex align-items-center">
            <input type="radio" name="" id="" checked={true} />
             <p className="bub-ml-1 small-14">Save to address book for later</p>
            </div>
            <button className="btn-small bg-theme w-100">Save</button>
        </form>
    )
}