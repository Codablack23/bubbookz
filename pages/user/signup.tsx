import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import styled from 'styled-components'
import Link from 'next/link'
import SelectDropDown from '../../components/widgets/user/selectDropDown'
import { useState } from 'react'

const schools =[
 "University Of Port Harcourt",
  "University Of Calabar",
  "River State Polytechnic"
]

export default function SignUp(){
    const [school,setSchool] = useState(null)
    const [faculty,setFaculty] = useState(null)
    const [dept,setDept] = useState(null)
    
    function showDropDown(id){
      const dropDown = document.querySelector(`#dropdown-${id}`) as HTMLDivElement
      dropDown.classList.toggle('hide')
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
           <input type="text" />
         </div><br />

         <label htmlFor="password">Last Name</label>
          <div  className="form--input-group">
            <input type="password"  className="login-password-input" />
            {/**/}
          </div><br />
         
          <label htmlFor="email">Email</label>
         <div className="form--input-group">
           <input type="email" />
         </div><br />

         <label htmlFor="password">School</label>
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
          <br />

         <label htmlFor="password">Password</label>
          <div  className="form--input-group">
            <input type="password"  className="login-password-input" />
            {/**/}
            <span className='btn'>
            <i className='bi bi-eye'></i> 
            </span>
          </div><br />

          <label htmlFor="password">Confirm Password</label>
          <div  className="form--input-group">
            <input type="password"  className="login-password-input" />
            {/**/}
            <span className='btn'>
            <i className='bi bi-eye'></i> 
            </span>
          </div><br />

          <Button {...BtnProps.signUp}>Sign Up</Button>

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

         <Button {...BtnProps.googleSignUp} >
           <div className='flex justify-content-center'>
           <span style={style.googleSignUp}>
              <img src="/icons/Google.svg" alt="" />
            </span>
            Sign Up with Google
           </div>
         </Button>

         <span style={style.signUpLink}>
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
    textAlign:'center',
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