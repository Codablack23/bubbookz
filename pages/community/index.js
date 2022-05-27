import {useState} from 'react'
import Image from "next/image"
import HomeLayout from "~/components/layout/home/HomeLayout"
import NewsLetter from "~/components/widgets/home/NewsLetter"
import Communities from "../../components/widgets/community/Communities"
import CreatedCommunities from "../../components/widgets/community/CreatedCom"
import Hero from "../../components/widgets/community/hero"


export default function Community(){
    const [loggedIn,setLoggedIn] = useState(true)
    return(
        <HomeLayout title={"Community"}> 
        <Hero/>   
          <section className="community-container container w-100">

             <div className="search-community-container container card w-100 min-vh-10">
                <p><i className="bi bi-search"></i></p>
                <input type="text" placeholder="Search Communities By Keyword" />
            </div><br />

              <div className="flex justify-content-space-between" style={{flexWrap:"wrap"}}>
                <Communities category="Trending" community={[{},{},{}]}/>

                <div className="w-28 w-md-100" style={{marginTop:"90px",marginLeft:'4px'}}>
                 {
                     loggedIn?
                     (
                         <>
                          <CreatedCommunities heading={"Created"}/> <br />
                          <CreatedCommunities heading={"Joined"}/>
                         </>
                     ):(
                        <div className="bg-white w-100 w-md-60 m-md-auto min-vh-40 curved">
                        <img src="/images/community/join.svg" className="img-fluid svh-40" alt="" />
                       </div>
                     )
                 }
                </div>
            </div>
          </section>
         <NewsLetter/>
        </HomeLayout>
    )
}