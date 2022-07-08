import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export default function Login(){
    return(
    <FormContainer title={"Login"} extraClass={null}>
        <div className="form--title">
            <h1 className="heading">Welcome back</h1>
            <p className='sub-heading'>Login to your account below</p>
        </div>
        <form className='form'>

            <label htmlFor="email">Email</label>
           <div className="form--input-group">
             <input type="email" />
           </div><br />

            <label htmlFor="password">Password</label>
            <div  className="form--input-group">
              <input type="password"  className="login-password-input" />
              <span className='btn'>
              <i className='bi bi-eye'></i> 
              </span>
            </div>

            <Link href={"/user/forgot-password"}>
                <a className="forgot-password">Forgot Password ?</a>
            </Link>

            <Button {...BtnProps.login}>Login</Button>

           <div className="or">
             <hr />
             <span>Or</span>
             <hr />
           </div>

           <Button  {...BtnProps.googleLogin}>
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