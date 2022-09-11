import CommunityDetailLayout from "~/components/layout/community/CommunityDetail";
import {useState,useEffect,useContext} from 'react';
import { CommunityContext } from "~/context/Community/Context";

interface Comm{
    [key:string]:any
}

export default function CommunityAbout(){
   const {community} = useContext(CommunityContext)
    return(
       <CommunityDetailLayout pageName={"Community"} activepage={"about"}>
         <div className="community-about">
            <div className="w-80 w-md-100 curved bg-white container-small card">
                <h1 className="small-24 fw-reg">About this community</h1><br />
                <p>{community.about?community.about:""}</p>
            </div><br /><br />
            {/* <div className="w-80 w-md-100 bg-white container-small curved card">
                <br />
                <h1 className="small-24 fw-reg">Community Rules</h1><br />
                <ul className="community-rules">
                    <li className="small-14"><span>1</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="small-14"><span>2</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="small-14"><span>3</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li className="small-14"><span>4</span>  Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                </ul>
            </div><br /> */}
         </div>
       </CommunityDetailLayout>
    )
}