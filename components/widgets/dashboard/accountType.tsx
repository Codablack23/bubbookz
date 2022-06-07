import Button from "../../layout/user/buttons";
import FormContainer from "../../layout/user/forms";


export default function SelectAccountType(){
    return(
        <FormContainer title={"Dashboard"} extraClass={"form-container-lg"}>
        <div className="form--title">
          <h1 className="heading">Account Type</h1>
          <p className='sub-heading'>Please select accout type to load your Dashbord</p>
      </div>
       <form className='form'>
       <label htmlFor="account_type">Account type</label>
       <div className="form--input-group">
           <input type="text" />
           <span>
               <i className="bi bi-chevron-down"></i>
           </span>
         </div><br />

         <p style={style.note}>Note</p>
         <p style={style.info}>Student type allows you to have a  bookshelf according to your course choice of study</p>
         <p style={style.info}>Non - Student type is a general account. It does not have the bookshelf option.</p>

         <button className="btn bg-theme w-100 bg-text-white">Continue</button>
       </form>
    
   </FormContainer>
    )
}

const style={
    info:{
        fontSize:'13px',
        color:'#1E1E1E',
        marginBottom:'0.3em'
    },
    note:{
      fontSize:'13px',
      color:"#8E8E8E",
      marginBottom:'0.5em'
    },
    customBtnStyles:{
        boxShadow: '0px 10px 20px rgba(214, 214, 214, 0.4)',
        margin:"1.2em 0",
        marginTop:'3em'
    }
}

const BtnProps= {
    continue:{
      height:'45px',
      color:{ text:"white",bg:"#1DCEFD"},
      border:{isExist:false,color:"none"},
      custom_styles:{...style.customBtnStyles},
    }
}