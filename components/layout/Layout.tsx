import Head from "next/head"
import { useState } from "react"
import Header from "./headers/header"
import SearchHeaderMobile from "./headers/mobileSearchHeader"
import Navigation from "./headers/navHeader"
import SearchHeader from "./headers/searchHeader"

export default function Layout({children}){
    const [isNavOpen,setIsNavOpen] = useState(false)
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