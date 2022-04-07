import Link from "next/link";
import { useState } from "react";

export default function ActionHeader({className}){
    return(
        <ul className={className}>
        <li className="header--actions-link">
        <Link href={"/"}>
          <a>
             <span>
                <img src="/icons/help.svg" alt="" />
             </span>
               <span className="hide-lg">Help</span> 
              </a>
         </Link>
        </li>
        <li className="header--actions-link">
        <Link href={"/"}>
          <a>
             <span>
                <img src="/icons/love.svg" alt="" />
             </span>
               <span className="hide-lg">WishList</span> 
              </a>
         </Link>
        </li>
        <li className="header--actions-link dropdown">
          <span>
            <img src="/icons/person.svg" alt="" />
          </span>
          <span className="hide-lg">Accounts</span> 
          <span style={style.dropDown}><i className="bi bi-chevron-down"></i></span>
          <DropDown/>
        </li>
    </ul>
    )
}
const style={
   dropDown:{
     display:"inline-block",
     margin:"0.3em"
   }
}






const DropDown =()=>{
  const [logged,setLogged] = useState(false)
  const links:{icon:string,url:string,text:string}[] =[
    {
      icon:"bi-columns-gap",
      url:"/",
      text:"Dashboard"
    },
    {
      icon:"bi-heart",
      url:"/",
      text:"WishList"
    },
    {
      icon:"bi-card-list",
      url:"/",
      text:"Orders"
    },
    {
      icon:"bi bi-envelope",
      url:"/",
      text:"Inbox"
    },
  
  ]
  return (
    <div className="dropdown--menu">
     {!logged?
     <>
     <Link href={"/user/login"}>
        <a className="dropdown--link bg-theme text-center">Sign in</a>
     </Link>
     <div className="or">
      <hr />
      <span>Or</span>
      <hr />
     </div>
    <Link href={"/user/signup"}>
      <a className="dropdown--link text-center">Sign Up</a>
    </Link>
     </>
     :null}
    <ul className="dropdown--list">

      {links.map(link=>(
          <li key={link.text}>
          <Link href={link.url}>
          <a className="dropdown--link">
            <span>
            <i className={`bi ${link.icon}`}></i>
            </span>
            <span>{link.text}</span>
          </a>
        </Link>
      </li>
      ))}    
     {
       logged?
       <li>
       <Link href={"/user/signup"}>
       <a className="dropdown--link">
         <span>
           <i className="bi bi-gear"></i>
         </span>
         <span>
           Settings
         </span>
         </a>
       </Link>
     </li>
     :null
     }
    {
      logged?
      <li>
      <Link href={"/user/signup"}>
      <a className="dropdown--link logout">
        <span>
        <i className="bi bi-box-arrow-right"></i>
        </span>
         <span>Log Out</span>
       </a>
      </Link>
    </li>
      :null
    }
    </ul>
  </div>
  )
}