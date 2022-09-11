import Head from "next/head"
import { useContext, useEffect,useState } from "react"
import { AuthContext } from "~/context/auth/AuthContext"
import Header from "./headers/header"
import SearchHeaderMobile from "./headers/mobileSearchHeader"
import Navigation from "./headers/navHeader"
import SearchHeader from "./headers/searchHeader"
import User from "~/helpers/User";

export default function Layout({children}){
    const {auth,dispatch} = useContext(AuthContext)
    const [isNavOpen,setIsNavOpen] = useState(false)

    async function getUser(){
        const response = await User.authenticate()
        if(response.status == "logged in"){
          dispatch({type:"LOGIN",data:{user:response.user}})
        }
    }
    useEffect(()=>{
      getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div className="Layout">
            <Head>
                <title>Bubbookz</title>
            </Head>
            <Header/>
            <SearchHeader setNavOpen={setIsNavOpen}/>
            <SearchHeaderMobile/>
            <Navigation showNav={isNavOpen?"nav-mobile-open":"nav-mobile-close"}  setNavOpen={setIsNavOpen}/>
            {children}
        </div>
    )
}