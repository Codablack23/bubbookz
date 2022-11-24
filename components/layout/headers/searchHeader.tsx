 import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import ActionHeader from './actionHeader'


 
    const Button = styled('h1')`
    background:${({backgroundColor})=>backgroundColor};
    border:none;
    border-radius:${({borderRadius})=>borderRadius};
    height:${({height})=>height};
    width:${({width})=>width};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    `

 export default function SearchHeader({setNavOpen}){
    const [query,setQuery] = useState("")
     return( 
         <div className="search--header">
          <div className="logo-container">
           <button className='open-menu' onClick={()=>setNavOpen(prev=>!prev)}>
            <i className="bi bi-list"></i>
           </button>
           <Link href={"/"}>
                <a className="logo">
                    <Image width={20} height={20} src="/images/logo.svg" alt="" />
                </a>
            </Link>
          </div>
            <form className="search--form">
                <div className="search--bar">
                    <span className="search--icon--container">
                    <Image width={20} height={20} src="/icons/search.svg" alt="" />
                    </span>
                    <input 
                    type="text"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    className="search--input" 
                    placeholder='Search by Keyword, Author, Title, ISBN'
                    />
                    <select className="search--category-container">
                        <option value="">All Categories</option>
                    </select>
                </div>
                <Link href={`/search?book_title=${query}`} passHref>
                <button className='btn bg-theme w-15' type='button'>
                 <span>
                     <Image width={20} height={20} src="/icons/search-white.svg" alt="" />
                 </span>
                </button>
                </Link>
            </form>
            <div className="actions-mobile-container">
            <ActionHeader className={"header--actions-mobile"}/>
              <Link href={'/user/cart'}>
              <a>
                 <span className='cart--icon'>
                     <Image width={20} height={20} src="/icons/cart.svg" alt="" />
                 </span>
                 <span className="cart--text hide-lg">MY CART</span> 
               </a>
              </Link>
           
            </div>
         </div>
     )
 }