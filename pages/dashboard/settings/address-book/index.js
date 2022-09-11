import DashboardSettingsLayout from "~/components/layout/dashboard/SettingsLayout";
import Link from "next/link";
import User from "~/helpers/User"
import { useState } from "react";
import { useEffect } from "react";
import { Spin } from "antd";

export default function SettingsHomePage(){
    const [address,setAddress] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    async function getAddressBook(){
      const response = await User.getAddress()
      setIsLoading(false)
      if(response.status === "success"){
        setAddress(response.address) 
      }
    }
    useEffect(()=>{
     getAddressBook()
    },[])
    return(
        <DashboardSettingsLayout page={"address-book"}>
            <header className="bub-p-3" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <p className="small-22 bub-text-accent fw-bold">Address Book</p>
                <Link href={"/dashboard/settings/address-book/add"}>
                  <a><i className="bi bi-plus-circle small-25"></i></a>
                </Link>
            </header>
            {
              isLoading?
              <div className="flex align-items-center justify-content-center w-100" style={{height:"100px"}}>
                <Spin/>
              </div>
              :address.length > 0?
                <div>
                  {address.map(add=>(
                      <div className="bub__user-address bub-p-3" key={add.address_id}>
                      <div className="flex align-items-center justify-content-space-between">
                        <p style={{textTransform:"capitalize"}}>{add.address}, {add.city}, {add.state}</p>
                        <Link passHref scroll={false} href={`/dashboard/settings/address-book/${add.address_id}`}>
                        <i className="bi bi-pencil pointer"></i>
                        </Link>
                      </div>
                     {add.isDefault && <p className="small-16 text-theme bub-mt-1">Default Address</p>}
                   </div>
                  ))}
                </div>
              :<div className="text-center">You have not added an address yet</div>}         
        </DashboardSettingsLayout>
    )
}