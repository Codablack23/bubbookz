import { Pagination } from "antd"
import Image from "next/image"
import Link from "next/link"
import React, { ReactNode, useContext, useEffect, useState } from "react"
import { AuthContext } from "~/context/auth/AuthContext"

type com = {
   category:string,
   community:{
      [key:string]:any
   }[],
}
interface Props{
   children?:ReactNode | JSX.Element,
   community:{
      [key:string]:any
   }
}
interface Creator{
   first_name?:string,
   last_name?:string,
   email?:string
}
const Community=({community}:Props)=>{
   const {state} = useContext(AuthContext)


   return (
      <div className="community animate-fade card w-100 min-vh-40 d-md-block">
         <div className="img-container w-30 w-md-100">
            <Image src={community.banner_img} layout="responsive" width={"100%"} height={"100%"} alt="" />
         </div>
         <div className="info w-70 w-md-100">
            <div className="title flex justify-content-space-between" style={{ alignItems: "center" }}>
               <h1 className="small-20 w-70">{community.title}</h1>
               {community.createdBy == state.user.email?
               <button className="btn-small w-30">Edit</button>
               :<Link href={`/community/${community.community_id}`} passHref>
               <button className="btn-small w-30 bg-theme text-white">Join</button>
               </Link>}
            </div>
            <p className="text-disabled small-16">By {community.creator}</p>
            <div className="activity flex">

               <p className="bub-mr-2">
                  <i className="bi bi-people-fill text-disabled"></i>
                  <span className="text-disabled small-16">{community.members.length} Members</span>
               </p>
               <p className="bub-mr-2">
                  <i className="bi bi-hand-thumbs-up text-disabled"></i>
                  <span className="text-disabled small-16">{community.likes} Likes</span>
               </p>
               <p className="bub-mr-2">
                  <i className="bi bi-chat-left-dots text-disabled"></i>
                  <span className="text-disabled small-16">2K comments</span>
               </p>

            </div>
            <p className="description">
               {community.about}
            </p>
         </div>
      </div>
   )
}
export default function Communities({category,community}:com){
   const [currentPage, setPage] = useState(1)
   const [itemsPerPage,setItemsPerPage] = useState({
      start:0,
      end:3
   })
   function onPageChange(page){
      const index = (page-1)

     setPage(page)
     setItemsPerPage({
      start: index % 3,
      end:(index % 3) + 3
     })
   }
    return(
      <div className="all-communities w-70 w-md-100">
         <header className="community-header">
            <h1>{category} Communities</h1>
            <div className="sortby-dropdown w-20 w-sm-30">
               <span className="subscript text-theme">Sort By</span>
               <select name="" id="">
                     <option value="">Trending</option>
                     <option value="">All</option>
               </select>
            </div>
         </header><br />
         {
            community.slice(itemsPerPage.start,itemsPerPage.end).map((com,i)=>(
            <Community key={i} community={com}/>
            ))
         }
         <br />
         <Pagination
         current={currentPage}
         defaultPageSize={3}
         showTotal={(total)=><div className="bub-mr-5">Page {currentPage} of {Math.ceil(total/2)}</div>}
         total={community.length}
         onChange={onPageChange}
         responsive={true}
         /><br/>
      </div>
    )
}