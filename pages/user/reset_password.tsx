import FormContainer from  '../../components/layout/user/forms'
import Button from  '../../components/layout/user/buttons'
import Link from 'next/link'

export default function ResetPassword(){
    return(
    <FormContainer title={"Forgot Password"} extraClass={null}>
        <div className="form--title">
            <h1 className="heading">Enter New Password</h1>
            <p className='sub-heading'>Enter Your New Password</p>
        </div>
        <form className='form'>

            <label htmlFor="password">Password 
            <span style={style.hint}> (Minimum of 8 characters)*</span>
            </label>
           <div className="form--input-group">
             <input type="password" />
           </div><br />

           <label htmlFor="confirm_password">Confirm Password*</label>
           <div className="form--input-group">
             <input type="password" />
           </div><br />
           
           <Button
            {...BtnProps.reset}
           >
              Set New Password
           </Button>
        </form>
        
    </FormContainer>
    )
}
const style ={
   hint:{
    fontSize:"13px",
    fontStyle:'italic',
    fontWeight:'lighter'
   }, 
   customBtnStyles:{
    boxShadow: '0px 10px 20px rgba(214, 214, 214, 0.4)',
  }
}

const BtnProps={
  reset:{
    type:'submit',
    height:'45px',
    color:{ text:"white",bg:"#1DCEFD"},
    border:{isExist:false,color:"none"},
    custom_styles:{...style.customBtnStyles,marginTop:'1em'}
  },
}