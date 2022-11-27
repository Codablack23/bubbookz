import HomeLayout from "~/components/layout/home/HomeLayout";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import CreatedCommunities from "~/components/widgets/community/CreatedCom";
import Link from "next/link";
import Image from "next/image";
import { useState,useEffect, useContext, useMemo, Dispatch, SetStateAction } from "react";
import { message, Spin } from "antd";
import { useRouter } from "next/router";
import Communities from "~/helpers/Communities";
import NotFound from "~/components/widgets/NotFound";
import { CommunityContext } from "~/context/Community/Context";
import { AuthContext } from "~/context/auth/AuthContext";
import LoadingScreen from "./modules/LoadingScreen";
import getFunctions from "./modules/handler";
import Header from "./modules/header";



interface ButtonProps {
     actionType:string,
     btnText:string | JSX.Element,
     classNames?:string,
     handler:(type:string,loadingHandler:Dispatch<SetStateAction<boolean>>)=>Promise<any>,
}
function CommunityButton({actionType,classNames,btnText,handler}:ButtonProps):JSX.Element{
  const [isLoading,setIsLoading] = useState(false)
  const handleClick=()=>{
    handler(actionType,setIsLoading)
  }
  return (
    <>
    {!isLoading?
   <button 
   className={`btn-small btn-pill bub-mr-3 ${classNames}`} 
   onClick={handleClick}
   style={{minWidth:"120px"}}>{btnText}</button>
    :  <button className={`btn-smaller btn-pill bub-mr-2 flex justify-content-center ${classNames}`} style={{minWidth:"120px"}}>
                  <Spin/>
         </button>}
    </>
  )
}
export default function CommunityDetailLayout({pageName,children,activepage}){
  const {state} = useContext(AuthContext)
  const [user,setUser] = useState<any>({})
  const {action} = useContext(CommunityContext)
  const [community,setCommunity] = useState<any>({})
  const [loading,setLoading] = useState(true)
  const [joinStatus,setJoinStatus] = useState(0)
  const Router = useRouter()
  
 const {updateLike,updateMembership} = getFunctions(Router.query.cid as string,setJoinStatus)

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
    if(state.user){
      setUser(state.user)
    }
  },[state,Router])
    return(
       <HomeLayout title={pageName}>
         <div>
         {loading ?
         <LoadingScreen/>
         :Object.entries(community).length > 0
         ?<>
         <header className="community-heading">
          <div className="community-banner w-100 vh-40 p-relative">
              <Image src={community.banner_img} layout="fill" className="img-fluid vh-35" alt="" />
              {/* <div className="banner-overlay vh-35">
                  <Image src="/images/events/hero_overlay.svg" layout="fill" className="img-fluid vh-35" alt="" />
              </div> */}
          </div>
          <div className="action-container container">
             <div className="action-header align-items-center d-md-block flex justify-content-space-between">
               <div className="w-55 w-md-95">
                   <h2>{community.title}</h2>
                   <p className="text-disabled small-14">Created {new Date(community.createdAt).toDateString()} by {community.creator}</p>
                </div>
                <div className="flex">
                {
                community.all_members.includes(user.email)?
                <CommunityButton
                actionType="leave"
                classNames="bg-accent-1 text-white card"
                btnText="Leave"
                handler={updateMembership}
                />
                : <CommunityButton
                actionType="join"
                classNames="bg-accent-1 text-white card"
                btnText="Join"
                handler={updateMembership}/>
                
                }
                {community.all_likes.includes(user.email)?  <CommunityButton
                actionType="dislike"
                classNames="card bg-white"
                btnText={<i className="bi bi-heart-fill bub-text-red small-20"></i>}
                handler={updateLike}
                />
                : <CommunityButton
                actionType="like"
                classNames="card bg-white"
                btnText={<i className="bi bi-heart small-20"></i>}
                handler={updateLike}/>
    
                }
                </div>
             </div>
              <Header community={community}/>
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
            <div className="grid-col-7 grid-col-md-12 main-content max-vh-90">
             {children}
            </div>
            <div className="grid-col-5 grid-col-md-12 container-small">
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