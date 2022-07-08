import HomeLayout from '~/components/layout/home/HomeLayout'
import Link from 'next/link'
const menus =[
    {
        name:"User Information",
        link:"/dashboard/settings/",
        slug:"user-info"
    },
    {
        name:"Student Details",
        link:"/dashboard/settings/student-detail",
        slug:"student-details"
    },
    {
        name:"Address Book",
        link:"/dashboard/settings/address-book",
        slug:"address-book"
    },
    {
        name:"Notification",
        link:"/dashboard/settings/notification",
        slug:"notification"
    },
    {
        name:"User Preference",
        link:"/dashboard/settings/user-preference",
        slug:"user-preference"
    }
    
]
export default function DashboardSettingsLayout({children,page}){
    return(
        <div className='bub__dashboard-settings-layout'>
            <HomeLayout title={"Dashboard Settings"}>
              <div className="bub__contain bub-mb-3">
                  <p className="fw-bold bub-text-accent small-28 bub-mb-2">Account Settings</p>
                  <div className="flex justify-content-space-between align-items-flex-start">
                    <div className="bub__dashboard-menu card curved">
                        {menus.map(link=>(
                            <Link href={link.link} key={link.name} scroll={false}>
                            <a className={`pointer bub__settings-link ${page===link.slug?"text-theme":""}`}>{link.name}</a>
                            </Link>
                        ))}
                    </div>
                    <div className="bub__settings-content curved w-70 w-md-100">
                    {children}
                    </div>
                  </div>
              </div><br /><br />
            </HomeLayout>
        </div>
    )
}