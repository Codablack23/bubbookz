import { message, Spin } from "antd";
import { FC, useState } from "react";
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";
import User from "~/helpers/User";
import { validateFields } from "~/helpers/validator";

interface Error{
    password?:string,
    confirm_password?:string
}
export default function PasswordForm():JSX.Element{
    const [new_password,setNewPassword] = useState("")
    const [confirm_password,setConfirmPassword] = useState("")
    const [passShown, setPassShown] = useState(false)
    const [cpassShown, setCPassShown] = useState(false)
    const [errors,setErrors] = useState<Error>({})
    const [isLoading,setIsLoading] = useState(false)

    async function changePassword(e){
       e.preventDefault()
       const fieldErrors = validateFields([
        {inputField:new_password,inputType:"password"},
        {inputField:confirm_password,inputType:"password",inputName:"confirm_password"}
       ])
       const errObj:Error = {}
       fieldErrors.forEach(err=>{
        errObj[err.field] = err.error
       })
       setErrors(errObj);
       if(fieldErrors.length === 0){
        if(new_password === confirm_password){
          setIsLoading(true)
          const response = await User.updatePassword({password:new_password})
          setIsLoading(false)
          if(response.status == "success"){
            message.success("Password changed Successfully")
            setConfirmPassword("")
            setNewPassword("")
          }else{
            message.error(response.error)
          }
        }else{
            message.error("Passwords do not match")
        }
       }

    }
    return(
       <form action="" className="bub-grid">
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">New Password</label>
            <div className="input-group">
                <input 
                 type={`${passShown?"text":"password"}`}
                 className="w-90"
                 value={new_password}
                 onChange={(e)=>setNewPassword(e.target.value)}
                 />
                <p className="side right-actions w-10" onClick={()=>setPassShown(prev=>!prev)}>
                <i className="bi bi-eye small-16" ></i>
                </p>
            </div>
            <p className="small-13 bub-text-red">{errors.password}</p>
        </div>
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Confirm Password</label>
            <div className="input-group">
                <input 
                type={`${cpassShown?"text":"password"}`}
                className="w-90"
                value={confirm_password}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <p className="side right-actions w-10" onClick={()=>setCPassShown(prev=>!prev)}>
                <i className="bi bi-eye small-16"></i>
            </p>
            </div>
            <p className="small-13 bub-text-red">{errors.confirm_password}</p>
        </div>
        <div className="grid-col-12">
           {isLoading?
             <button className="btn-small w-100 bg-accent-1 text-white"><Spin/></button>
           :<button className="btn-small w-100 bg-accent-1 text-white" onClick={changePassword}>Save Changes</button>
           }
        </div>
       </form>
    )
}