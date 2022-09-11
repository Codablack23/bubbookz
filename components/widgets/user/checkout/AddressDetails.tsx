import { useEffect, useState } from "react"
import states from '~/data/states.json'
import cities from '~/data/cities.json'
import { validateFields } from "~/helpers/validator"

interface Err{
  [key:string]:any
}

export default function AddressDetails({addAddress,showEditor,fullAddress}):JSX.Element{
    const [address,setAddress] = useState("")
    const [addressState,setAddressState] = useState("")
    const [addressCity,setAddressCity] = useState("")
    const [errors,setErrors] = useState<Err>({})


   function handleSubmit(e){
     e.preventDefault()
     const fieldErr = validateFields([
      {inputField:address,inputType:"address",inputName:"Address"},
      {inputField:addressState,inputType:"text",inputName:"State"},
      {inputField:addressCity,inputType:"text",inputName:"City"}
     ])

     const errObj:Err= {}
     
     fieldErr.forEach(err=>{
          const key = err.field as string
          errObj[key] = err.error
     })
     setErrors(errObj)
     if(fieldErr.length == 0){
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

            <label htmlFor="Address" className="input-label">Address / landmark</label>
            <input 
            type="text" 
            className="input w-100"
            value={address}
            onChange = {(e)=>setAddress(e.target.value)}
            />
            <p className="small-13 bub-text-red">{errors.address}</p>
            <label htmlFor="Address" className="input-label">State</label>
            <div className="input-group">
             <select 
               name="" className="w-95" id=""
               value={addressState}
               onChange = {(e)=>setAddressState(e.target.value)}
             >
              <option value="">Select</option>
              {states.map(state=><option key={state.id} value={state.name}>{state.name}</option> )}
             </select>
            </div>
            <p className="small-13 bub-text-red">{errors.state}</p>

           
            <label htmlFor="Address" className="input-label">City</label>
            <div className="input-group">
             <select 
             name=""
             className="w-95" id=""
             value={addressCity}
             onChange = {(e)=>setAddressCity(e.target.value)}
             >
              <option value="">Select</option>
              {cities.map(city=><option key={city.id} value={city.name}>{city.name}</option> )}
             </select>
            </div>
            <p className="small-13 bub-text-red">{errors.city}</p>
            <br />
          
            <div className="flex align-items-center">
            <input type="radio" name="" id="" checked={true} />
             <p className="bub-ml-1 small-14">Save to address book for later</p>
            </div>
            <button className="btn-small bg-theme w-100">Save</button>
        </form>
    )
}