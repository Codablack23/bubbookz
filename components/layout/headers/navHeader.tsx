import Link from "next/link"
import { useState } from "react"
import {Links} from '../../../data/links'

export default function Navigation({showNav,setNavOpen}){
    const showDropDown=(id)=>{
        const dropdown = document.querySelector(`#collapsible-${id}`) as HTMLDivElement
        if (dropdown.style.maxHeight){
            dropdown.style.maxHeight = null;
        } else {
            dropdown.style.overflowY ="scroll";
            dropdown.style.maxHeight = 50 + "vh";
        }
    }
    return(
        <div className={`nav ${showNav}`}>
           <div className="close--nav-container">
           <span className="close--nav" onClick={()=>setNavOpen(prev=>!prev)}>
            <i className="bi bi-x-lg"></i>
            </span>
           </div>
         <ul className="navbar">
             {
                 Links.map((a)=>(
                  <li className={`nav-list-item ${a.dropdown!==null?"dropdown dropdown-nav-link no-hover":""}`} key={a.name}>
                      {a.dropdown !==null?
                      <p className="nav-link" onClick={()=>showDropDown(a.name)}>
                          {a.name}
                      <span>
                          <i className="bi bi-chevron-down"></i>
                      </span>
                      </p>
                      :
                         <Link href={a.url}>
                         <a className="nav-link">{a.name}</a>
                     </Link>
                      }
                     {
                      a.dropdown!==null?(
                      <> 
                       <div className="dropdown--menu dark hide-sm">
                            {a.dropdown.map(link=>(
                            <Link href={link.url} key={link.text}>
                                <a className="dropdown--link">{link.text}</a>
                            </Link>
                            ))}
                       </div>
                       <div className={`mobile--collapsible`} id={`collapsible-${a.name}`}>
                         {a.dropdown.map(link=>(
                            <Link href={link.url} key={link.text}>
                                <a className="collapse--link">{link.text}</a>
                            </Link>
                            ))}
                       </div>
                       </>
                      ):
                      null
                     }
                  </li>
                 ))
             }
         </ul>
        </div>
    )
}