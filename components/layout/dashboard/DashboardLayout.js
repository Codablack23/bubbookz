import Head from 'next/head'
import DashboardHeader from '~/components/widgets/dashboard/DashboardHeader'
import DashboardNav from '~/components/widgets/dashboard/DashboardNav'
import Footer from '../footer'

export default function DashboardLayout({children,activePage}){
    return(
    <div>
     <Head>
        <title>Bubbookz | Dashboard </title>
     </Head>
     <div className="bub-dashboard-layout">
      <DashboardHeader/>
      <DashboardNav activePage={activePage}/>
      <div className="bub__dashboard-content">
        {children}
      </div>
     </div><br /><br />

    <Footer/>
    </div>
    )
}