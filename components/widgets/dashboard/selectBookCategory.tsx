import { message, Spin } from "antd"
import { useEffect, useState } from "react"
import User from "~/helpers/User"
export default function SelectBookCategory(){
    const [isLoading,setIsLoadng] = useState(false)
    const [categories] = useState([
        'Accounting','Fiction','Thriller','History','Philosophy',
        'Action and adventure','sci-fi','Mystery','Science',
        'Religion, spirituality and age','Sports and Leisure',
      
      ].map(c=>c.toLowerCase()))
      const [selected,setSelected] = useState([])
     const [limit,setLimit] = useState(8)
    
      function select(genre){
        if(selected.length < limit + 1){
          setSelected(prev=>[...prev,genre])
        }  
      }
      function removeSelection(genre){
        setSelected(prev=>{
          return [...prev.filter(s=>s !== genre)]
        })
      }
      async function handleSubmit(e){
        if(selected.length > 0){
          const pref = selected.toString()
          console.log(pref)
          setIsLoadng(true)
          const response = await User.updatePreferences(pref)
          setIsLoadng(false)
          if(response.status && response.status === "success"){
            message.success("preferences updated successfully")
          }
          else{
            message.error(response.error)
          }
        }else{
          message.warning("Please select at least one preference")
        }
      }
      async function getPreference(){
        const response = await User.getPreferences()
        if(response.status === "success"){
          const {preferences} = response.preferences
          if(preferences){
            setSelected(preferences.split(/,/))
          }
        }
      }
     useEffect(()=>{
       getPreference()
     },[])
    return(
       <div style={style.genres}>
       <p style={style.limit}>{limit - selected.length} Selection(s) Remaining</p>
        <div className="genre--container">
        {categories.length>0?
          categories.map(cat=>(             
          selected.includes(cat.toLowerCase())?
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
      <div className="flex w-100 justify-content-center bub-mt-3">
        {isLoading?
          <button className="btn-smaller w-50 bub-bg-white bub-text-grey small-16 bub-bg-primary">
            <Spin/>
          </button>
        :(
           <button className="btn-smaller w-50 bub-bg-white bub-text-grey small-16 bub-bg-primary" onClick={handleSubmit}>Save Changes</button>
        )}
      </div>
      </div>
    )
}
const style:any={
    added:{
     backgroundColor:"#00A7F2",
     color:'white',
     transition:'all ease 0.1',
     textTransform:"capitalize"
    },
    notAdded:{
      backgroundColor:"#EEEFF1",
      color:'#1E1E1E',
      transition:'all ease 0.1',
      textTransform:"capitalize"
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