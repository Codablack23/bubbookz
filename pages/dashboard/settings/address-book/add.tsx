import React, { useState,useEffect } from 'react'
import allStates from "~/data/states.json"
import {useRouter} from 'next/router'
import DashboardSettingsLayout from '../../../../components/layout/dashboard/SettingsLayout'
import { validateFields } from '~/helpers/validator'
import User from '~/helpers/User'
import { message, Spin } from 'antd'

interface Errors{
    address?:string,
    city?:string,
    state?:string
}

export default function SettingsHomePage(){
    const [address,setAddress] = useState("")
    const [state,setState] = useState(allStates[0].name.toLowerCase())
    const [city,setCity] = useState(allStates[0].name.toLowerCase())
    const [errors,setErrors] = useState<Errors>({})
    const [isLoading,setIsLoading] = useState(false)
    const  [isDefault,setIsDefault] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    const fieldErrors = validateFields([
        {inputField:address,inputType:"address",inputName:"address"},
        {inputField:state,inputType:"word",inputName:"state"},
        {inputField:city,inputType:"address",inputName:"city"}
    ])
    const errObj:Errors = {}
    fieldErrors.forEach(e=>{
        errObj[e.field] = e.error
    })
    console.log(fieldErrors)
    setErrors(errObj)
    if(fieldErrors.length === 0 ){
       setIsLoading(true)
       const response = await User.addAddress({
        address,
        state,
        city,
        isDefault
       })
       setIsLoading(false)
       console.log(response)
       if(response.status === "success"){
          message.success("Address added successfully")
          setTimeout(()=>{
            window.location.assign("/dashboard/settings/address-book")
          },2000)
       }
       else{
        message.error(response.error)
       }
    }
  }
    const Router = useRouter()
    return(
        <DashboardSettingsLayout page={"address-book"}>
                  <div className="container-small">
              <h1 className="bub-text-accent small-24">
                <i className="bi bi-arrow-left small-24 bub-mr-1 pointer"
                onClick={Router.back}
                ></i>
               Add Address
              </h1><br />
              <form action="">
                <label htmlFor="" className="input-label small-18 fw-bold">Address</label>
                <div className="input-group">
                    <input
                     className="w-95 m-auto" 
                     name=""
                     id=""
                     value={address}
                     onChange={(e)=>setAddress(e.target.value)}
                     />
                </div>
                <p className='small-13 err-text'>{errors.address}</p>
                <br />
                <label htmlFor="" className="input-label small-18 fw-bold">State</label>
                <div className="input-group">
                    <select 
                    className="w-95 m-auto"
                    value={state}
                    onChange ={(e)=>setState(e.target.value)}
                    >  {allStates.map(st=>(
                        <option value={st.name.toLowerCase()} key={st.id}>{st.name}</option>
                    ))}

                    </select>
                </div>
                <p className='small-13 err-text'>{errors.state}</p>
                <br />
                <label htmlFor="" className="input-label small-18 fw-bold">City</label>
                <div className="input-group">
                    <select 
                    className="w-95 m-auto"
                    value={city}
                    onChange ={(e)=>setCity(e.target.value)}
                    >
                    {allStates.map(st=>(
                        <option value={st.name.toLowerCase()} key={st.id}>{st.name}</option>
                    ))}
                    </select>
                </div>
                <p className='small-13 err-text'>{errors.city}</p>
                <br />
                
                <div className="flex align-items-center bub-mt-2 bub-mb-2">
                    <input type="checkbox" checked={isDefault} onChange={()=>setIsDefault(prev=>!prev)} className="bub-mr-1" name="" id="" />
                    <label htmlFor="">Set as Default Address</label>
                </div>
                <br />
               <div className="text-center">
               {isLoading?
                <button className="btn bg-theme w-100 m-auto " type='button'><Spin/></button>
               :<button className="btn bg-theme w-100 m-auto" onClick={handleSubmit}>Add Address</button>}
               </div>
              </form>
            </div>
        </DashboardSettingsLayout>
    )
}