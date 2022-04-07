import { useState } from "react";
import Button from "../layout/user/buttons";
import FormContainer from "../layout/user/forms";

export default function SelectBookGenre(){
  const [categories] = useState([
    'Accounting','Fiction','Thriller','History','Philosophy',
    'Action and adventure','sci-fi','Mystery','Science',
    'Religion, spirituality and age','Sports and Leisure',
  
  ])
  const [selected,setSelected] = useState([])
 const [limit,setLimit] = useState(8)

  function select(genre){
    if(selected.length < limit){
      setSelected(prev=>[...prev,genre])
    }  
  }
  function removeSelection(genre){
    setSelected(prev=>{
      return [...prev.filter(s=>s !== genre)]
    })
  }
  return(
    <FormContainer title={"Select Book Genre"} extraClass={'form-container-xlg'}>
      <div className="form--title">
        <h1 className="heading">Select your favourite book genres</h1>
        <p className='sub-heading'>We use your favourite genres to make better book recommendations for you</p>
      </div>
      <div style={style.genres}>
        <p style={style.limit}>{limit - selected.length} Selection(s) Remaining</p>
      <div className="genre--container">
          {categories.length>0?
            categories.map(cat=>(             
            selected.includes(cat)?
            (
            <span
              key={cat}
              className="genre"
              style={style.added}
              onClick={()=>{removeSelection(cat)}}
              >
             {cat}
            </span>
            )
            :(
            <span
              key={cat}
              className="genre" 
              style={style.notAdded}
              onClick={()=>{select(cat)}}
              >
              {cat}
            </span>
            )
            ))      
          :null}
        </div>
      </div>
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
    textAlign:'right',
    margin:'0.1em 0.3em'
  },
  notice:{
    width:'65%',
    margin:"2em auto",
    textAlign:'center'
  },
  p:{
    fontSize:'14px',
    color:'#8E8E8E',
    textAlign:'center',
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