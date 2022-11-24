import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import Link from 'next/link'

export default function ForgotPassword(){
    return(
    <FormContainer title={"Forgot Password"} extraClass="">
        <div className="form--title">
            <h1 className="heading">Forgot Password</h1>
            <p className='sub-heading'>Enter the email address associated with your account</p>
        </div>
        <form className='form'>
            <label htmlFor="email">Email</label>
           <div className="form--input-group">
             <input type="email" />
           </div><br />
           <Button
            type={'submit'}
            height={'45px'}
            color={{ text:"white",bg:"#1DCEFD"}}
            border={{isExist:false,color:"none"}}
            custom_styles={{
              boxShadow: '0px 10px 20px rgba(214, 214, 214, 0.4)',
              marginTop:'1em'
            }}
           >
              Reset Password
           </Button>
           <p className='notice' style={
               {
                   fontSize:'14px',
                   textAlign:'center',
                   marginTop:'2em'
               }
           }>Please check your mail for a link to reset your password</p>
        </form>
        
    </FormContainer>
    )
}