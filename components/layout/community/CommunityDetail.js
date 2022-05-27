import HomeLayout from "~/components/layout/home/HomeLayout";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import CreatedCommunities from "~/components/widgets/community/CreatedCom";
import Link from "next/link";


export default function CommunityDetailLayout({pageName,children,activepage}){
    return(
        <HomeLayout title={pageName}>
         <div>
         <header className="community-heading">
          <div className="community-banner w-100 vh-35 p-relative">
              <img src="/images/events/hero.svg" className="img-fluid vh-35" alt="" />
              <div className="banner-overlay vh-35">
                  <img src="/images/events/hero_overlay.svg" className="img-fluid vh-35" alt="" />
              </div>
          </div>
          <div className="action-container container">
             <div className="action-header align-items-center d-md-block flex justify-content-space-between">
               <div className="w-55 w-md-95">
                   <h1>Welcome To Book Review</h1>
                   <p className="text-disabled small-14">Created 5 months ago by Jennifer Anderson</p>
                </div>
                <div className="w-40 w-md-80  w-md-95 flex justify-content-space-between">
                 <button className="btn bg-theme w-60 w-md-50 w-sm-55 text-white">Join Community</button>
                 <button className="btn bg-theme w-30 w-md-35 w-sm-40 text-white flex justify-content-center">
                     <span><i className="bi bi-hand-thumbs-up"></i><br /></span>
                     <span> Like</span>
                 </button>
                </div>
             </div><br />

                <div className="likes-and-comments w-60 w-md-95 w-sm-100 flex">
                    <p>
                      <i className="bi bi-people-fill"></i><br />
                      <span className="small-16">500 Members</span>
                    </p>
                    <p>
                      <i className="bi bi-hand-thumbs-up"></i><br />
                      <span className="small-16">150 Likes</span>
                    </p>
                    <p>
                      <i className="bi bi-chat-left-dots"></i><br />
                      <span className="small-16">2K comments</span>
                    </p>
                </div>
               <ul className="community-tab">
                 <li className={`tab ${activepage == "about"?"active":""}`}>
                   <Link href={"/community/10/"}>
                   <a >About</a>
                   </Link>
                 </li>
                 <li className={`tab ${activepage == "discussions"?"active":""}`}>
                  <Link href={"/community/10/discussions"}>
                     <a >Discussions</a>
                   </Link>
                 </li>
               </ul>

            
          </div>
        </header>
        <div className="container community-content">
         <div className="flex flex-wrap">
            <div className="w-65 w-md-95 m-md-auto main-content max-vh-90">
             {children}
            </div>
            <div className="w-35 w-md-95 m-md-auto container-small">
              <CreatedCommunities heading={"Created"}/><br/>
              <CreatedCommunities heading={"Joined"}/>
            </div>
        </div>
       </div>
     </div>
        <NewsLetter/>
        </HomeLayout>
    )
}