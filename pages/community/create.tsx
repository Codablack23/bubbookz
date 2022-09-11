import { useContext, useEffect, useState } from "react";
import HomeLayout from "~/components/layout/home/HomeLayout";
import CreateForm from "~/components/widgets/community/CreateCommunityForm";
import CreatedCommunities from "~/components/widgets/community/CreatedCom";
import Hero from "~/components/widgets/community/hero";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import { AuthContext } from "~/context/auth/AuthContext";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Create(){
    const {state} = useContext(AuthContext)
    const Router = useRouter()

    useEffect(()=>{
        if(state){
            if(!state.isLoggedIn){
            Router.push("/user/login")
            }
        }
    },[state,Router])
    return(
        <HomeLayout title={"Create Community"}>
        <Hero showButton={false}/>
         <div className="container" style={{marginTop:"1.5em",marginBottom:'1.5em'}}>
             <div className="bub-grid">
               <div className="create-community-container grid-col-8 grid-col-md-12">
                  <h1 className="text-center font-a fw-reg small-24">Create Community</h1><br /><br />
                  <CreateForm buttonText={"Create Community"}/>
               </div>
                <div className="grid-col-4 grid-col-md-12">
                    <CreatedCommunities heading={"Created"}/> <br />
                    <CreatedCommunities heading={"Joined"}/>
                </div>
             </div>
         </div>
         <NewsLetter/>
        </HomeLayout>
    )
}