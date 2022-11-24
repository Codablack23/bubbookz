import { useState } from "react";
import Button from "../../layout/user/buttons";
import FormContainer from "../../layout/user/forms";
import SelectBookCategory from './selectBookCategory'

export default function SelectBookGenre(){
  return(
    <FormContainer title={"Select Book Genre"} extraClass={'form-container-xlg'}>
      <div className="form--title">
        <h1 className="heading">Select your favourite book genres</h1>
        <p className='sub-heading'>We use your favourite genres to make better book recommendations for you</p>
      </div>
          <SelectBookCategory/>
      <div style={style.notice}>
        <p style={style.p}>You can edit this anytime in your User preference in account settings </p>
        <Button {...BtnProps.continue}>Continue</Button>
      </div>
    </FormContainer>
  )
}

const style={
  added:{
   backgroundColor:"#00A7F2",
   color:'white',
   transition:'all ease 0.1'
  },
  notAdded:{
    backgroundColor:"#EEEFF1",
    color:'#1E1E1E',
    transition:'all ease 0.1'
  },
  genres:{
  width:"95%",
  minHeight:'10vh',
  border:"1px solid #ABABAB",
  padding:'0.5em',
  borderRadius:"7px",
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'2em',
  },
  limit:{
    fontSize:'14px',
    color:'#8E8E8E',
    margin:'0.1em 0.3em'
  },
  notice:{
    width:'65%',
    margin:"2em auto",
  },
  p:{
    fontSize:'14px',
    color:'#8E8E8E',
  }

}

const BtnProps= {
  continue:{
    height:'45px',
    color:{ text:"white",bg:"#1DCEFD"},
    border:{isExist:false,color:"none"},
    custom_styles:{
      boxShadow: '0px 10px 20px rgba(214, 214, 214, 0.4)',
      margin:"1em auto",
      width:'80%'
    }
  },
}