import DashboardSettingsLayout from "~/components/layout/dashboard/SettingsLayout";
import {useRouter} from 'next/router'
import { useEffect,useState } from "react";
import User from '~/helpers/User'
import { message,Spin } from "antd";
import allStates from "~/data/states.json"
import { validateFields } from '~/helpers/validator'

export default function SettingsHomePage(){
  
    const [addressBook,setAddressBook] = useState({})
    const [errors,setErrors] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const [isSubmitLoading,setIsSubmitLoading] = useState(false)
    const Router = useRouter()
    const aid = Router.query.aid
    
    async function getAddress(id){
        const response = await User.getSingleAddress(id)
        setIsLoading(false)
        if(response.status === "success"){
            setAddressBook(response.address)
        }
    }
    function handleInput(e){
       const el = e.target
       setAddressBook(prev=>{
         const changedObj = {...prev}
         changedObj[el.id] = el.value
         return changedObj
       })

    }
    async function handleEdit(e){
      e.preventDefault()
      const {address,state,city} = addressBook

      const fieldErrors = validateFields([
        {inputField:address,inputType:"address",inputName:"address"},
        {inputField:state,inputType:"word",inputName:"state"},
        {inputField:city,inputType:"address",inputName:"city"}
      ])
      const errObj = {}
      fieldErrors.forEach(e=>{
          errObj[e.field] = e.error
      })
      setErrors(errObj)
      if(fieldErrors.length === 0 ){
        setIsSubmitLoading(true)
        const response = await User.updateAddress(aid,addressBook)
        setIsSubmitLoading(false)
        console.log(response)
        if(response.status === "success"){
           message.success("Address updated successfully")
           setTimeout(()=>{
             window.location.assign("/dashboard/settings/address-book")
           },2000)
        }
        else{
         message.error(response.error)
        }
     }
    }
    function handleCheck(){
        setAddressBook(prev=>{
            const changedObj = {...prev}
            changedObj.isDefault = !prev.isDefault
            return changedObj
          })
    }
    useEffect(()=>{
       if(aid){
        getAddress(aid)
       }
    },[aid])
    return(
        <DashboardSettingsLayout page={"address-book"}>
                  <div className="container-small">
              <h1 className="bub-text-accent small-24">
                <i className="bi bi-arrow-left small-24 bub-mr-1 pointer"
                onClick={Router.back}
                ></i>
               Edit Address
              </h1><br />
                {isLoading?
                <div className="flex justify-content-center align-items-center" style={{minHeight:"300px"}}>
                 <Spin size="large"/>
                </div>
                :
                Object.entries(addressBook).length > 0?
                (
                    <form action="">
                    <label htmlFor="" className="input-label small-18 fw-bold">Address</label>
                    <div className="input-group">
                        <input 
                        className="w-95 m-auto"
                        name="" id="address" 
                        value={addressBook.address}
                        onChange={handleInput}
                         />
                    </div>
                    <p className="small-13 err-text">{errors.address}</p>
                    <br />
                    <label htmlFor="" className="input-label small-18 fw-bold">State</label>
                    <div className="input-group">
                        <select 
                        className="w-95 m-auto"
                        name="" 
                        value={addressBook.state} 
                        id="state"
                        onChange={handleInput}
                        >
                         {allStates.map(st=>(
                        <option value={st.name.toLowerCase()} key={st.id}>{st.name}</option>
                    ))}
                        </select>
                    </div>
                    <p className="small-13 err-text">{errors.state}</p>
                    <br />
                    <label htmlFor="" className="input-label small-18 fw-bold">City</label>
                    <div className="input-group">
                        <select 
                        className="w-95 m-auto" 
                        value={addressBook.city} 
                        name="" 
                        id="city"
                        onChange={handleInput}
                        >
                         {allStates.map(st=>(
                        <option value={st.name.toLowerCase()} key={st.id}>{st.name}</option>
                    ))}
                        </select>
                    </div>
                    <p className="small-13 err-text">{errors.city}</p>
                    <br />
                    
                    <div className="flex align-items-center bub-mt-2 bub-mb-2">
                        <input 
                         type="checkbox" checked={addressBook.isDefault}
                         onChange={handleCheck} 
                         className="bub-mr-1"
                         name=""
                         id="isDefault" />
                        <label htmlFor="">Set as Default Address</label>
                    </div>
                    <br />
                   <div className="text-center">
                    {isSubmitLoading?
                        <button className="btn bg-theme w-100 m-auto" type="button"><Spin/></button>:
                        <button className="btn bg-theme w-100 m-auto" onClick={handleEdit}>Save Changes</button>
                    }
                   </div>
                  </form>
                ):(
                    <div className="text-center">
                        <h3>Not Found</h3>
                        <p>The Resource you are trying to edit does not exist</p>
                    </div>
                )
                }
            </div>
        </DashboardSettingsLayout>
    )
}