import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";
import User from "~/helpers/User";

export default function ActionHeader({className}){

    return(
        <ul className={className}>
        <li className="header--actions-link">
        <Link href={"/"}>
          <a>
             <span>
                <Image height={"20px"} width={"20px"} src="/icons/help.svg" alt="help-icon" />
             </span>
               <span className="hide-lg">Help</span> 
              </a>
         </Link>
        </li>
        <li className="header--actions-link">
        <Link href={"/"}>
          <a>
             <span>
                <Image height={"20px"} width={"20px"} src="/icons/love.svg" alt="love-icon" />
             </span>
               <span className="hide-lg">WishList</span> 
              </a>
         </Link>
        </li>
        <li className="header--actions-link dropdown">
          <span>
            <Image height={"20px"} width={"20px"} src="/icons/person.svg" alt="person-iconm" />
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
  
  const {state,dispatch} = useContext(AuthContext)
  const links:{icon:string,url:string,text:string}[] =[
    {
      icon:"bi-columns-gap",
      url:"/dashboard",
      text:"Dashboard"
    },
    {
      icon:"bi-heart",
      url:"/user/wishlist",
      text:"WishList"
    },
    {
      icon:"bi-card-list",
      url:"/dashboard/orders",
      text:"Orders"
    },
    {
      icon:"bi bi-envelope",
      url:"/",
      text:"Inbox"
    },
  
  ]
  async function logOut(){
    await User.logOut()
    dispatch({type:"LOGOUT"})
  }
  useEffect(()=>{
    if(state){
       setLogged(state.isLoggedIn)
    }
  },[state])
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
       <Link href={"/dashboard/settings"}>
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
      <a className="dropdown--link logout" onClick={logOut}>
        <span>
        <i className="bi bi-box-arrow-right"></i>
        </span>
         <span>Log Out</span>
       </a>
    </li>
      :null
    }
    </ul>
  </div>
  )
}