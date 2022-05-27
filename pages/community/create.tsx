import HomeLayout from "~/components/layout/home/HomeLayout";
import CreateForm from "~/components/widgets/community/CreateCommunityForm";
import CreatedCommunities from "~/components/widgets/community/CreatedCom";
import Hero from "~/components/widgets/community/hero";
import NewsLetter from "~/components/widgets/home/NewsLetter";

export default function Create(){
    return(
        <HomeLayout title={"Create Community"}>
        <Hero showButton={false}/>
         <div className="container" style={{marginTop:"1.5em",marginBottom:'1.5em'}}>
             <div className="flex d-md-block justify-content-space-between">
               <div className="create-community-container w-65 w-md-100">
                  <h1 className="text-center font-a fw-reg small-24">Create Community</h1><br /><br />
                  <CreateForm buttonText={"Create Community"}/>
               </div><br />
               <div className="w-30 w-md-100">
                    <CreatedCommunities heading={"Created"}/> <br />
                    <CreatedCommunities heading={"Joined"}/>
               </div>
             </div>
         </div>
         <NewsLetter/>
        </HomeLayout>
    )
}