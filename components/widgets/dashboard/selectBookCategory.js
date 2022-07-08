import { useState } from "react"
export default function SelectBookCategory(){
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