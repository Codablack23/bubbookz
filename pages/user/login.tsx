import {useState,useContext} from 'react'
import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import Link from 'next/link'
import Image from 'next/image'
import { AuthContext } from '~/context/auth/AuthContext'
import { validateFields } from '~/helpers/validator'
import { message, notification, Spin } from 'antd'
import User from '~/helpers/User'
import { useRouter } from 'next/router'
import FirebaseHelpers from '~/helpers/FirebaseHelpers'

interface Errors{
  email?:string,
  password?:string
}

export default function Login(){
  const Router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errors,setErrors] = useState<Errors>({email:"",password:""})
    const {dispatch} = useContext(AuthContext)
    const [isLoading,setIsLoading] = useState(false)

    async function handleLogin(e){
      e.preventDefault()
      const fieldErrors = validateFields([
        {inputField:email,inputType:"email"},
        {inputField:password,inputType:"password"},
      ])
      const errObj:Errors = {}
      fieldErrors.forEach(err=>{
        errObj[err.field] = err.error
      })
      setErrors(errObj)
      if(fieldErrors.length === 0){
        setIsLoading(true)
        const response = await User.loginUser({email,password})
        setIsLoading(false)
        if(response.user){
          dispatch({type:"LOGIN",data:{user:response.user}})
          const redirect = Router.query.redirect
          window.location.assign(redirect?(redirect as string):"/dashboard")
        }else{
          notification.error({
            message:"Login Failed",
            description:response.error,
            style:{
              width:300
            }
           })
        }
      }
     
    }
    async function handleGoogleLogin(){
      try {
        const res = await FirebaseHelpers.LoginWithGoogle()
        if(res.status === "authenticated"){
          const response =  await User.loginWithGoogle({email:res.user.email})
          if(response.status === "authorized"){
            dispatch({type:"LOGIN",data:{user:response.user}})
            const redirect = Router.query.redirect
            window.location.assign(redirect?(redirect as string):"/dashboard")
          }
          else{
            message.error(response.error)
          }
        }
        else{
          message.error(res.message)
        }
      } catch (error) {
        message.error("Sorry an error occurred try again later")
      }
      
    }
    return(
    <FormContainer title={"Login"} extraClass={null}>
        <div className="form--title">
            <h1 className="heading">Welcome back</h1>
            <p className='sub-heading'>Login to your account below</p>
        </div>
        <form className='form'>

            <label htmlFor="email">Email</label>
           <div className="form--input-group">
             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
            <p className="error-text"><i className='small-13'>{errors.email}</i></p>
            <label htmlFor="password">Password</label>
            <div  className="form--input-group">
              <input type="password"  className="login-password-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <span className='btn'>
              <i className='bi bi-eye'></i> 
              </span>
            </div>
            <p className="error-text"><i className='small-13'>{errors.password}</i></p>

            <Link href={"/user/forgot-password"}>
                <a className="forgot-password">Forgot Password ?</a>
            </Link>

            <Button {...BtnProps.login} type={"button"} callBack={handleLogin}>
              {isLoading?<Spin/>:"Login"}
            </Button>

           <div className="or">
             <hr />
             <span>Or</span>
             <hr />
           </div>

           <Button  {...BtnProps.googleLogin} callBack={handleGoogleLogin}>
             <div className='flex justify-content-center' >
             <span style={style.googleLogo}>
                <Image src="/icons/Google.svg" alt="google-icon" height={"30px"} width={"30px"} />
              </span>
              Login with Google
             </div>
           </Button>

           <span className='text-center' style={style.signUpLink} >
             Dont Have an Account? 
             <Link href={'/user/signup'}>
               <a style={style.a}> Sign Up</a>
             </Link>
           </span>
        </form>
        
    </FormContainer>
    )
}
const style = {
  customBtnStyles:{
    boxShadow: '0px 10px 20px rgba(214, 214, 214, 0.4)',
  },
  a:{
    fontSize:'inherit',
    color:"#1DCEFD"
  },
  signUpLink:{
    display:'block',
    margin:"2em auto",
    fontSize:'15px',
    color:"#ABABAB"
  },
  googleLogo:{
    display:'inline-block',
    marginRight:'1em'
  }
}
const BtnProps= {
  login:{
    height:'45px',
    color:{ text:"white",bg:"#1DCEFD"},
    border:{isExist:false,color:"none"},
    custom_styles:{...style.customBtnStyles}
  },
  googleLogin:{
    type:'button',
    height:'45px',
    color:{ text:"grey",bg:"unset"},
    border:{isExist:true,color:"#ABABAB"}
  }
}