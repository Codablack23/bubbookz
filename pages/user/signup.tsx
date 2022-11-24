import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import styled from 'styled-components'
import Link from 'next/link'
import SelectDropDown from '../../components/widgets/user/selectDropDown'
import { useContext, useState } from 'react'
import Image from 'next/image'
import { validateFields } from '~/helpers/validator'
import { message, notification, Spin } from 'antd'
import User from '~/helpers/User'
import { AuthContext } from '~/context/auth/AuthContext'
import FirebaseHelpers from '~/helpers/FirebaseHelpers'

const schools =[
 "University Of Port Harcourt",
  "University Of Calabar",
  "River State Polytechnic"
]
interface Errors {
  email?:string,
  password?:string,
  firstname?:string,
  lastname?:string,
  faculty?:string,
  department?:string,
  confirm_password?:string,
  school?:string,
}

export default function SignUp(){
    const [school,setSchool] = useState("")
    const [faculty,setFaculty] = useState("")
    const [dept,setDept] = useState("")
    const [firstname,setFirstName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [lastname,setLastName] = useState("")
    const [errors,setErrors] = useState<Errors>({})
    const [isLoading,setIsLoading] = useState(false)
    const {dispatch} = useContext(AuthContext)
     async function handleSignUp(e:Event){
       e.preventDefault()
       const inputErrors = validateFields([
        {inputField:email,inputType:"email"},
        {inputField:password,inputType:"password"},
        {inputField:confirmPassword,inputType:"password",inputName:"Confirm_Password"},
        {inputField:lastname,inputType:"text",inputName:"Lastname"},
        {inputField:firstname,inputType:"text",inputName:"Firstname"},
        {inputField:school,inputType:"text",inputName:"School"},
        {inputField:faculty,inputType:"text",inputName:"Faculty"},
        {inputField:dept,inputType:"text",inputName:"Department"},
       ])
       const errObj:Errors =  { }
       inputErrors.forEach(err=>{
          errObj[err.field] = err.error
       })
       setErrors(errObj)
       console.log({errObj})
     
       if(inputErrors.length === 0){
        setIsLoading(true);
         const newUser = {
          email,
          password,
          lastname,
          firstname,
          school,
          faculty,
          department:dept
         }
         if(password !== confirmPassword){
          setIsLoading(false);
          notification.error({
            message:<p className='error-text'>Password Error</p>,
            description:<p><small>Confirm Password and Password fields do not match</small></p>
          })
         
         }else{
          const response:{
            status:string,
            message:string,
            error:string,user:{}
          } = await User.signUpUser(newUser);
          setIsLoading(false);
          if(response.status === "success"){
            notification.success({
              message:<h3 style={{textTransform:"capitalize"}}>{response.status}</h3>,
              description:<p><small>{response.message}</small></p>
            })
            dispatch({type:"SIGN_UP",data:{user:response.user}})
            window.location.assign("/dashboard")
          }else{
            notification.error({
              message:<h3 className='error-text' style={{textTransform:"capitalize"}}>{response.status}</h3>,
              description:<p><small>{response.error}</small></p>
            })
          }
          
         }
       }
    }
   

    function showDropDown(id){
      const dropDown = document.querySelector(`#dropdown-${id}`) as HTMLDivElement
      dropDown.classList.toggle('hide')
    }
    async function handleGoogleSignUp(){
     try {
      const res = await FirebaseHelpers.LoginWithGoogle()
      if(res.status == "authenticated"){
        const names = res.user.displayName.split(" ")
        const response =  await User.signUpWithGoogle({
          email:res.user.email,
          firstname:names[0],
          lastname:names[1]
        })
        if(response.status === "success"){
          dispatch({type:"LOGIN",data:{user:response.user}})
          window.location.assign("/dashboard")
        }
        else{
          message.error(response.error)
        }
         
      }else{
        message.error(res.error)
      }
     } catch (error) {
       message.error("Sorry an error occurred try again later")
     }
    }
    return(
      <FormContainer title={"Sign Up"}  extraClass={null}>
      <div className="form--title">
          <h1 className="heading">Welcome To Bubbookz</h1>
          <p className='sub-heading'>Lets get you all started up, create your account by filling the form below</p>
      </div>
      <form className='form'>

          <label htmlFor="firstname">First Name</label>
         <div className="form--input-group">
           <input
            type="text" 
            value={firstname}
            onChange={(e)=>setFirstName(e.target.value)}
             />
         </div>
         <p className="error-text"><small>{errors.firstname}</small></p>
         <br />

         <label htmlFor="password">Last Name</label>
          <div  className="form--input-group">
            <input type="text" value={lastname} onChange={(e)=>setLastName(e.target.value)} className="login-password-input" />
            {/**/}
          </div>
          <p className="error-text"><small>{errors.lastname}</small></p>
          <br />
         
          <label htmlFor="email">Email</label>
         <div className="form--input-group">
           <input
            type="email"
            value={email}
            id="email"
            onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <p className="error-text"><small>{errors.email}</small></p>
         <br />

         <label htmlFor="school">School</label>
          <div  
          className="form--input-group"
          onClick={()=>showDropDown('school')}
           >
            <input type="school" value={school !== null?school:"Select"} readOnly/>
            {/**/}
            <button type='button' className='btn select--dropdown-btn'>
            <i className="bi bi-chevron-down"></i>
            </button>
          </div>
          <div className='select--dropdown hide' onMouseLeave={()=>showDropDown('school')} id="dropdown-school">
          <SelectDropDown selectFunction={setSchool} items={schools}/>
          </div>
          <p className="error-text"><small>{errors.school}</small></p>
          <br />

          <label htmlFor="falc">Faculty</label>
         <div className="form--input-group" 
          onClick={()=>showDropDown('faculty')}
          >
           <input type="text" value={faculty !== null?faculty:"Select"} readOnly />
           <span className='btn'>
            <i className="bi bi-chevron-down"></i>
            
            </span>
            
         </div>
         <div className='select--dropdown hide' onMouseLeave={()=>showDropDown('faculty')} id="dropdown-faculty">
          <SelectDropDown selectFunction={setFaculty} items={schools}/>
          </div>
          <p className="error-text"><small>{errors.faculty}</small></p>
         <br />

         <label htmlFor="dept">Department</label>
          <div  className="form--input-group"  
          onClick={()=>showDropDown('dept')}
          
          >
            <input type="text" value={dept!== null?dept:"Select"} readOnly/>
            {/**/}
            <span className='btn'>
            <i className="bi bi-chevron-down"></i>
            </span>
          </div>
          <div className='select--dropdown hide' onMouseLeave={()=>showDropDown('dept')} id="dropdown-dept">
          <SelectDropDown selectFunction={setDept} items={schools}/>
          </div>
          <p className="error-text"><small>{errors.department}</small></p>
          <br />

         <label htmlFor="password">Password</label>
          <div  className="form--input-group">
            <input
             type="password" 
             value={password}
             className="login-password-input"
             onChange={(e)=>setPassword(e.target.value)} />
            {/**/}
            <span className='btn'>
            <i className='bi bi-eye'></i> 
            </span>
          </div>
          <p className="error-text"><small>{errors.password}</small></p>
          <br />

          <label htmlFor="password">Confirm Password</label>
          <div  className="form--input-group">
            <input
              type="password"
              value={confirmPassword}
              className="login-password-input" 
              onChange={(e)=>setConfirmPassword(e.target.value)}/>
            {/**/}
            <span className='btn'>
            <i className='bi bi-eye'></i> 
            </span>
          </div>
          <p className="error-text"><small>{errors.confirm_password}</small></p>
          <br />

          {isLoading?
          <Button {...BtnProps.signUp}><Spin/></Button>
          :<Button {...BtnProps.signUp} callBack={handleSignUp}>Sign Up</Button>
          }

            <div className="agree flex align-items-center">
                <input type="checkbox" name="agree" id="agree" />
                <p className="agree-text">
                By creating an account, I agree to Bubbooks  
                  <Link href={'/user/login'}>
                    <a style={style.a}> Terms & Conditions </a>
                  </Link>
                  <span> and</span>
                <Link href={'/user/login'}>
                    <a style={style.a}> Privacy policy</a>
                  </Link>
                </p>
            </div>

         <div className="or">
           <hr />
           <span>Or</span>
           <hr />
         </div>

         <Button {...BtnProps.googleSignUp} callBack={handleGoogleSignUp}>
           <div className='flex align-items-center justify-content-center'>
              <Image src="/icons/Google.svg" alt="" height={"23px"} width={"23px"}/>
              <span className="text-disabled small-14 fw-bold bub-ml-1">Sign Up with Google</span>
           </div>
         </Button>

         <span className='text-center' style={style.signUpLink}>
           Already Have an Account? 
           <Link href={'/user/login'}>
             <a style={style.a}
             > Login</a>
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
  googleSignUp:{
    display:'inline-block',
    marginRight:'1em'
  }
}

const BtnProps={
  signUp:{
    height:'45px',
    color:{ text:"white",bg:"#1DCEFD"},
    border:{isExist:false,color:"none"},
    custom_styles:{...style.customBtnStyles,marginTop:'1.2em'}
  },
  googleSignUp:{
    type:'button',
    height:'45px',
    color:{ text:"grey",bg:"unset"},
    border:{isExist:true,color:"#ABABAB"}
  }
}