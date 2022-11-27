import {Image} from "antd";
import { ChangeEventHandler, useState } from "react";
import CommunityDetailLayout from "~/components/layout/community/CommunityDetail";

function AddPost(){
  const [postText,setPostTest] = useState("😣")
  const handleInput:ChangeEventHandler<HTMLInputElement>=(e)=>{
    setPostTest(e.target.value)
  }
  return (
   <div className="card bub-bg-white br bub-p-2" style={{
    position:"sticky",
    zIndex:100,
    top:0
   }}>
     <div className="flex align-items-center">
      <div className="">
      <Image src="/images/dashboard-profile.svg"
      height={"50px"}
      width={"50px"}
      alt={"user"}/>
      </div>
      <div className="w-90 bub-ml-1">
        <div className="flex br-lg align-items-center justify-content-space-between w-100 bub-p-1 bub-pl-2 bub-pr-2 bub-bg-light-gray">
          <input 
          value={postText}
          onChange={handleInput}
          style={{border:"none",outline:"none",background:"none"}}
          className="bub-text-accent w-70"
          type="text" 
          placeholder="Write a Post" />
          <button style={{border:"none",outline:"none",background:"none",cursor:"pointer"}}>
          <i className="bi bi-emoji-smile bub-text-accent"></i>
          </button>
        </div>
      </div>
    </div>
    {postText?
      <div className="bub-grid bub-mt-2">
      <button className="btn-small bg-white small-13 card bub-text-accent grid-col-4 ">Add Photos</button>
      <div className="grid-col-4 "></div>
      <button className="btn-small small-13 bg-accent-1 bub-text-white grid-col-4">Make Post</button>
    </div>
    :null}
   </div>
  )
}

const Post = ()=>{
  return (
    <section className="card bg-white br bub-p-1 bub-mb-1 bub-mt-1">
      <header className="flex align-items-center justify-content-space-between">
        <div className="flex align-items-center">
          <div>
          <Image src="/images/dashboard-profile.svg"
          height={"50px"}
          width={"50px"}
          alt={"user"}/>
          </div>
          <div className="bub-ml-1">
            <p className="fw-bold" style={{margin:"0"}}>Jane Doe</p>
            <p className="bub-text-light-grey small-13">33 mins ago</p>
          </div>
        </div>
        <button className="btn">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </header>
      <div className="bub-mt-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatum repellendus, pariatur totam quis vitae exercitationem illum libero dignissimos tempore ipsum iste ut delectus vel.</p>
      </div>
      <div className="flex align-items-center justify-content-space-between">
        <div className="flex align-items-center">
          <p><i className="bi bi-hand-thumbs-up-fill bub-text-primary"></i></p>
          <p className="small-14 bub-ml-1">5 Likes</p>
        </div>
        <p className="flex align-items-center small-14">
          5  comments
        </p>
      </div>
      <hr />
      <div className="bub-grid flex align-items-center bub-p-1">
         <div className="grid-col-4">
          <button className="flex w-100 justify-content-center align-items-center bg-white" style={{border:"none",cursor:"pointer"}}>
            <p> <i className="bi bi-hand-thumbs-up"></i></p>
            <p className="bub-ml-1">Like</p>
          </button>
          </div> 
         <div className="grid-col-4">
         <button className="flex w-100 justify-content-center align-items-center bg-white" style={{border:"none",cursor:"pointer"}}>
            <p> <i className="bi bi-chat-right-dots"></i></p>
            <p className="bub-ml-1">Comment</p>
          </button>
          </div> 
         <div className="grid-col-4">
         <button className="flex w-100 justify-content-center align-items-center bg-white" style={{border:"none",cursor:"pointer"}}>
            <p> <i className="bi bi-send"></i></p>
            <p className="bub-ml-1">Share</p>
          </button>
          </div> 
      </div>
    </section>
  )
}

export default function CommunityAbout(){
    return(
       <CommunityDetailLayout pageName={"Community"} activepage={"discussions"}>
         <div className="community-discussions">
           <AddPost/>
            <br />
            {Array(3).fill("").map((post,i)=><Post key={i +"posts_here"}/>)}
         </div>
       </CommunityDetailLayout>
    )
}