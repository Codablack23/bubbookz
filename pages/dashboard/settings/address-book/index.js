import DashboardSettingsLayout from "~/components/layout/dashboard/SettingsLayout";
import Link from "next/link";

export default function SettingsHomePage(){
    return(
        <DashboardSettingsLayout page={"address-book"}>
            <header className="bub-p-3">
                <p className="small-22 bub-text-accent fw-bold">Address Book</p>
            </header>
            <div className="bub__user-address bub-p-3">
               <div className="flex align-items-center justify-content-space-between">
                 <p>Block K 29, Hawaiaan Lodge, Aluu, Port Harcourt, Rivers State</p>
                 <Link passHref scroll={false} href={"/dashboard/settings/address-book/1"}>
                 <i className="bi bi-pencil pointer"></i>
                 </Link>
               </div>
               <p className="small-16 text-theme bub-mt-1">Default Address</p>
            </div>
            <div className="bub__user-address bub-p-3">
               <div className="flex align-items-center justify-content-space-between ">
                 <p>Block K 29, Hawaiaan Lodge, Aluu, Port Harcourt, Rivers State</p>
                 <Link passHref scroll={false} href={"/dashboard/settings/address-book/1"}>
                 <i className="bi bi-pencil pointer"></i>
                 </Link>
               </div>
            </div>
        </DashboardSettingsLayout>
    )
}