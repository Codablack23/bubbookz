import { useState} from 'react'
import Image from "next/image"
import HomeLayout from "~/components/layout/home/HomeLayout"
import NewsLetter from "~/components/widgets/home/NewsLetter"
import Communities from "../../components/widgets/community/Communities"
import CreatedCommunities from "../../components/widgets/community/CreatedCom"
import Hero from "../../components/widgets/community/hero"
import { useContext,useEffect} from 'react'
import { AuthContext } from '~/context/auth/AuthContext'
import CommFunctions from "~/helpers/Communities"
import { Skeleton, Spin } from 'antd'
import NotFound from '~/components/widgets/NotFound'
import LoadingState from '~/components/widgets/loaders/Communitites'


interface InfoProps{
  likes?:{
    [key:string]:any
  }[],
  members?:{
    [key:string]:any
  }[]
  creator?:{
    [key:string]:any
  }[]
}

export default function Community(){
    const [loggedIn,setLoggedIn] = useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const [communities,setCommunities] = useState([])
    
    const {state} = useContext(AuthContext)

    async function getAllCommunities(){
      const response = await CommFunctions.getCommunities()
      setIsLoading(false)
      setCommunities(response.communities)
      
   }
  
    useEffect(() => {
      setLoggedIn(state.isLoggedIn)
      getAllCommunities()
    },[state])
    return(
        <HomeLayout title={"Community"}> 
        <Hero/>   
          <section className="community-container container w-100">

             <div className="search-community-container container card w-100 min-vh-10">
                <p><i className="bi bi-search"></i></p>
                <input type="text" placeholder="Search Communities By Keyword" />
            </div>
              <div className="flex justify-content-space-between" style={{flexWrap:"wrap"}}>
                 {isLoading
                 ?<LoadingState/>
                 :communities.length > 0
                 ?<Communities 
                   category="Trending" 
                   community={communities}
                   />
                 :<div className='w-65 w-md-100'>
                  <NotFound title={"communities"}/>
                 </div>
                 }

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
                        <Image src="/images/community/join.svg" height={"100%"} layout="responsive" width="100%" className="img-fluid svh-40" alt="community" />
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