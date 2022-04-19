import Head from "next/head";
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