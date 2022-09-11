import Head from "next/head";
import CommunityContextProvider from "~/context/Community/Context";
import Footer from "../footer";

export default function HomeLayout({children,title}){
    return(
        <div>
        <Head>
            <title>Bubbookz | {title}</title>
        </Head>
         {children}
        <Footer/>
        </div>
    )
}