import { message, notification, Spin } from "antd"
import { useEffect, useState } from "react"
import User from "~/helpers/User"
import { validateFields } from "~/helpers/validator"

interface Errors{
    firstname?:string,
    lastname?:string,
    phone?:string,
    email?:string
}
export default function ProfileForm(){
    const [submitted,setSubmitted] = useState(0)
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [errors,setErrors] = useState<Errors>({})
    const [isLoading,setIsLoading] = useState(false)

    async function updateSettings(e){
        e.preventDefault()
        const fieldErrors = validateFields([
            {inputField:firstname,inputType:"word",inputName:"firstname"},
            {inputField:email,inputType:"email"},
            {inputField:lastname,inputType:"word",inputName:"lastname"},
            {inputField:phone,inputType:"phone",inputName:"phone"},
        ])
        const errObj:Errors = {}
        fieldErrors.forEach(err=>{
            errObj[err.field] = err.error
        })
        setErrors(errObj);
        if(fieldErrors.length === 0){
            setIsLoading(true)
            const res = await User.updateUserDetails({
                firstname,
                lastname,
                recieved_email:email,
                phone_no:phone,
                profile_picture:""
            })
            setIsLoading(false)
            if(res.status === "success"){
               message.success("details changed successfully")
            }
            else{
                message.error(res.error)
            }
        }
    }
    async function getSettings(){
        const response = await User.getUserDetails()
        if(response.status === "success"){
           const {details} = response
           setEmail(details.email)
           setFirstname(details.firstname)
           setLastname(details.lastname)
           setPhone(details.phone_no?details.phone_no:"")
        }
    }

    useEffect(()=>{
        getSettings()
    },[submitted])
    return (
    <form action="" className="bub__profile-form bub-grid">
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">First Name</label>
            <div className="input-group">
                <input 
                type="text"
                value={firstname}
                onChange={(e)=>setFirstname(e.target.value)}
                className="w-95" />
            </div>
            <p className="small-13 err-text">{errors.firstname}</p>
        </div>
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Last Name</label>
            <div className="input-group">
                <input
                 type="text"
                 className="w-95" 
                 value={lastname}
                 onChange={(e)=>setLastname(e.target.value)}
                 />
            </div>
            <p className="small-13 err-text">{errors.lastname}</p>
        </div>

        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Email</label>
            <div className="input-group">
                <input
                 type="email" 
                 className="w-95" 
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <p className="small-13 err-text">{errors.email}</p>
        </div>

        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Phone Number</label>
            <div className="input-group">
                <div className="side side-left w-25">
                <select name="" id="" className="w-100 text-accent-1">
                    <option value="+234">+234</option>
                </select>
                </div>
                <input
                 type="phone" 
                 value={phone}
                 onChange={(e)=>setPhone(e.target.value)}
                />
            </div>
            <p className="small-13 err-text">{errors.phone}</p>
        </div>
        <div className="grid-col-12">
        {!isLoading?
          <button className="btn-small w-100 bg-theme text-white" onClick={updateSettings}>Save Changes</button>
        :  <button className="btn-small w-100 bg-theme text-white"><Spin/> </button>}
        </div>
       
    </form>
    )
}