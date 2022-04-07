import { useState } from "react"

export default function SelectDropDown({selectFunction,items}){
    const [input,setInput] = useState("")
    return(
        <div className="select--dropdown-menu">
            <div className="dropdown--search">
               <span>
                   <i className="bi bi-search"></i>
                   <input value={input} onChange={(e)=>setInput(e.target.value.toLowerCase())} type="text" className="search-input" placeholder="Search" />
               </span>
            </div>
            <ul className="dropdown--list">
               {items.length > 0 ?
               items.filter(item=>item.toLowerCase().includes(input)).map(item=>(
                   <li key={item} onClick={()=>selectFunction(item)}>{item}</li>
               )):null}
            </ul>
        </div>
    )
}