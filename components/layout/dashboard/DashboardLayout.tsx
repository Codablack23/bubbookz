import { Skeleton } from 'antd'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import DashboardHeader from '~/components/widgets/dashboard/DashboardHeader'
import DashboardNav from '~/components/widgets/dashboard/DashboardNav'
import { AuthContext } from '~/context/auth/AuthContext'
import User from '~/helpers/User'
import Footer from '../footer'

function DashboardLoading(){
  return(
   <div className='bub-p-2'>
    <br /><br />
    <div className='bub-center'>
    <Skeleton.Avatar
    active={true}   
    size={100}
    
    />
    </div><br />
    <div>
      <Skeleton
       title={false}
       active={true}
       paragraph={{ rows: 4 }}
      />
    </div><br />

    <div>
      <Skeleton
       active={true}
       paragraph={{ rows: 6}}
      />
    </div>
   </div>
  )
}
export default function DashboardLayout({children,activePage}){
    const {state} = useContext(AuthContext)
    const [isLoading,setIsLoading] = useState(true)
    async function checkUser(){
      const response = await User.authenticate()
      if(response.status !== "logged in"){
        window.location.assign("/user/login")
      }else{
        setIsLoading(false)
      }
    
    }
    useEffect(()=>{
       checkUser()
    },[state])
    return(
    <div>
     <Head>
        <title>Bubbookz | Dashboard </title>
     </Head>
     <div className="bub-dashboard-layout">
      {
        isLoading?
        <DashboardLoading/>
        :<>
         <DashboardHeader/>
        <DashboardNav activePage={activePage}/>
        <div className="bub__dashboard-content">
        {children}
        </div>
        </>

      }
     </div><br /><br />

    <Footer/>
    </div>
    )
}