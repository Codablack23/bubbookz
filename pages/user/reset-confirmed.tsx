import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import Link from 'next/link'

export default function ResetPasswordConfirmed(){
    return(
    <FormContainer title={"Forgot Password"} extraClass={null} >
        <div className="form--title">
            <h1 className="heading">Forgot Password</h1>
            <p className='password-info'>
               We have sent you an e-mail with instructions on how to reset your password. Check your inbox and click on the link provided. Didn’t get an email ? <Link href={'/user/forgot_password'}>
               <a style={style.a}> Resend</a>
             </Link>
            </p>
        </div>
    </FormContainer>
    )
}
const style ={
   hint:{
    fontSize:"13px",
    fontStyle:'italic',
    fontWeight:'lighter'
   },
   info:{
       textAlign:'left',
       width:'100%'
   },
   a:{
    fontSize:'inherit',
    color:"#1DCEFD"
  },
}