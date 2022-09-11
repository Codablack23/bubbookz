import HomeLayout from "~/components/layout/home/HomeLayout";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import CreatedCommunities from "~/components/widgets/community/CreatedCom";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect, useContext, useMemo } from "react";
import { message, Skeleton, Spin } from "antd";
import { useRouter } from "next/router";
import Communities from "~/helpers/Communities";
import NotFound from "~/components/widgets/NotFound";
import { CommunityContext } from "~/context/Community/Context";
import { AuthContext } from "~/context/auth/AuthContext";


function LoadingScreen(){
  return(
    <div className="bub-p-2">
      <Skeleton.Button
        block
        active
        size="large"
        style={{height:"200px"}}
      />
      <div className="bub-mt-3 bub-mb-3">
          <Skeleton
          active
          paragraph={{rows:3}}
          />
      </div>
      <div className="bub-grid">
          <div className="grid-col-8 grid-col-md-12">
              <div className="bub-mb-3">
              <Skeleton.Button
              block
              active
              size="large"
              style={{height:"150px"}}
              />
              </div>
              <div className="bub-mb-3">
              <Skeleton.Button
              block
              active
              size="large"
              style={{height:"150px"}}
              />
              </div>
          </div>
          <div className="grid-col-4 grid-col-md-12">
              <Skeleton
              active
              paragraph={{rows:5}}
              />
          </div>
      </div>
    </div>
      )
}

export default function CommunityDetailLayout({pageName,children,activepage}){
  const {state} = useContext(AuthContext)
  const [user,setUser] = useState<any>({})
  const {action} = useContext(CommunityContext)
  const [community,setCommunity] = useState<any>({})
  const [loading,setLoading] = useState(true)
  const [isJoining,setIsJoining] = useState(false)
  const [joinStatus,setJoinStatus] = useState(0)
  const [isLiking,setIsLiking] = useState(false)
  const Router = useRouter()
  
 async function updateMembership(type:string){
  console.log(Router.query.cid)
  setIsJoining(true)
  const response =  type==="join"?
   await Communities.join(Router.query.cid as string,{})
   :await Communities.leave(Router.query.cid as string,{})
  setIsJoining(false)
  if(response.status === "success"){
    message.success(`You have Successfully ${type === "join"?"Joined":"Left"} ${community.title}`)
    setJoinStatus(prev=>prev +1)
  }else{
    message.error(response.error)
  }
 }
 async function updateLike(type){
  console.log(Router.query.cid)
  setIsLiking(true)
  const response = type === "like"?
  await Communities.like(Router.query.cid as string,{})
  :await Communities.dislike(Router.query.cid as string,{})
  setIsLiking(false)
  if(response.status === "success"){
    setJoinStatus(prev=>prev +1)
  }else{
    message.error(response.error)
  }
 }
  async function getCommunity(Router){
     if(Router.query.cid){
      const response = await Communities.getCommunity(Router.query.cid as string)
      setLoading(false)
      if(response.status == "success"){
        setCommunity(response.community)
        action(response.community)
        console.log(response.community.all_members)
      }
     }
  }
  useEffect(()=>{
    getCommunity(Router)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[Router,joinStatus])
  useEffect(()=>{
    if(state){
      setUser(state.user)
    }
  },[state])
    return(
       <HomeLayout title={pageName}>
         <div>
         {loading ?
         <LoadingScreen/>
         :Object.entries(community).length > 0
         ?<>
         <header className="community-heading">
          <div className="community-banner w-100 vh-35 p-relative">
              <Image src={community.banner_img} layout="fill" className="img-fluid vh-35" alt="" />
              <div className="banner-overlay vh-35">
                  <Image src="/images/events/hero_overlay.svg" layout="fill" className="img-fluid vh-35" alt="" />
              </div>
          </div>
          <div className="action-container container">
             <div className="action-header align-items-center d-md-block flex justify-content-space-between">
               <div className="w-55 w-md-95">
                   <h1>{community.title}</h1>
                   <p className="text-disabled small-14">Created {new Date(community.createdAt).toDateString()} by {community.creator}</p>
                </div>
                <div className="flex justify-content-space-between">
                {
                community.all_members.includes(user.email)?
                isJoining?(
                  <button 
                className="btn-smaller bg-theme text-white flex justify-content-center"
                style={{minWidth:"120px"}}>
                  <Spin/>
                  </button>
                ):
                <button 
                className="btn-small bg-white card text-theme bub-p-2" 
                style={{minWidth:"120px"}}
                onClick={()=>updateMembership("leave")}
                >
                  Leave</button>
                :isJoining?(
                  <button 
                className="btn-smaller bg-theme text-white flex justify-content-center"
                style={{minWidth:"120px"}}>
                  <Spin/>
                  </button>
                ):(
                  <button 
                className="btn-smaller bg-theme text-white" 
                onClick={()=>updateMembership("join")}
                style={{minWidth:"120px"}}>Join</button>
                )
                
                }
                {community.all_likes.includes(user.email)?
                 isLiking?
                <button className="btn-smaller bg-theme text-white flex justify-content-center" style={{minWidth:"120px"}}>
                  <Spin/>
                </button>
                :<button 
                  className="btn-smaller bg-theme text-white flex justify-content-center"
                  onClick={()=>updateLike("dislike")}
                  style={{minWidth:"120px"}}>
                    <span><i className="bi bi-hand-thumbs-down-fill"></i><br /></span>
                    <span> DisLike</span>
                  </button>
                :isLiking?
                  <button className="btn-smaller bg-theme text-white flex justify-content-center" style={{minWidth:"120px"}}>
                    <Spin/>
                  </button>
                :<button 
                className="btn-smaller bg-theme text-white flex justify-content-center" 
                style={{minWidth:"120px"}}
                onClick={()=>updateLike("like")}
                >
                  <span><i className="bi bi-hand-thumbs-up-fill"></i><br /></span>
                  <span> Like</span>
                </button>
                }
                </div>
             </div><br />

                <div className="likes-and-comments w-60 w-md-95 w-sm-100 flex">
                    <p>
                      <i className="bi bi-people-fill"></i><br />
                      <span className="small-16">{community.members} Members</span>
                    </p>
                    <p>
                      <i className="bi bi-hand-thumbs-up"></i><br />
                      <span className="small-16">{community.likes} Likes</span>
                    </p>
                    <p>
                      <i className="bi bi-chat-left-dots"></i><br />
                      <span className="small-16">2K comments</span>
                    </p>
                </div>
               <ul className="community-tab">
                 <li className={`tab ${activepage == "about"?"active":""}`}>
                   <Link href={`/community/${community.community_id}`} scroll={false}>
                   <a >About</a>
                   </Link>
                 </li>
                 <li className={`tab ${activepage == "discussions"?"active":""}`}>
                  <Link href={`/community/${community.community_id}/discussions`} scroll={false}>
                     <a >Discussions</a>
                   </Link>
                 </li>
               </ul>

            
          </div>
        </header>
        <div className="container community-content">
         <div className="bub-grid">
            <div className="grid-col-8 grid-col-md-12 main-content max-vh-90">
             {children}
            </div>
            <div className="grid-col-4 grid-col-md-12 container-small">
              <CreatedCommunities heading={"Created"}/><br/>
              <CreatedCommunities heading={"Joined"}/>
            </div>
        </div>
       </div>
         </>
         :<NotFound title={"community"}/>
         }
         </div>
        <NewsLetter/>
      </HomeLayout>
    )
}