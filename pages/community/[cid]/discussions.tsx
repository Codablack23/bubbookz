import Image from "next/image";
import CommunityDetailLayout from "~/components/layout/community/CommunityDetail";

export default function CommunityAbout(){
    return(
       <CommunityDetailLayout pageName={"Community"} activepage={"discussions"}>
         <div className="community-discussions">
               <div className="flex align-items-center w-100 align-items-center">
                <div className="profile-container w-20">
                 <div className="profile__image">
                 <Image src="/images/dashboard-profile.svg"
                  height={"100%"}
                  width={"100%"}
                  layout={"responsive"}
                  alt={"user"}/>
                 </div>
                </div>
                <div className="input-group w-65 bub-ml-2">
                  <input type="text" className="w-80" placeholder="Write a post"/>
                 <div className="w-20 flex align-items-center">
                 <button className="btn-small bg-white">
                    <i className="bi bi-emoji-smile"></i>
                  </button>
                  <button className="btn-small bg-white">
                    <i className="bi bi-paperclip"></i>
                  </button>
                 </div>
                </div>
               </div>
             
           </div>
       </CommunityDetailLayout>
    )
}