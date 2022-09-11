import { message } from "antd";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { useEffect, useState } from "react";
import User from "~/helpers/User";
import DashboardSettingsLayout from "../../../components/layout/dashboard/SettingsLayout";

export default function SettingsHomePage(){
    const [checked,setChecked] = useState({
        community:false,
        comment_likes:false,
        events:false,
        book_arrival:false
    })
    async function getNotifications(){
        const reponse = await User.getNotifyPref()
        if(reponse.status && reponse.status === "success"){
            setChecked(reponse.notification)
        }
    }

    async function setPref(value){
        const response = await User.updateNotifyPref(value)
        if(response.status){
          message.success("Update successful")
        }else{
            message.error(response.error)   
        }
    }
    async function handlecheck(e){
       const el = e.target
       setChecked(prev=>{
        const values = {...prev}
        values[el.id] = !prev[el.id]
        return values
       })
      
    }
    useEffect(()=>{
      getNotifications()
    },[])
    useEffect(()=>{
      setPref(checked)
    },[checked])
    return(
        <DashboardSettingsLayout page={"notification"}>
            <div className=" container-small">
            <p className="bub-text-accent small-22 bub-mb-1 fw-bold">Notifications Settings</p>
                <p className="small-16">What notifications you recieve</p>
                <ul className="bub__notification-list bub-mt-2">
                <li>
                    <input 
                    type="checkbox" 
                    checked={checked.community}
                    onChange={handlecheck}
                    id="community"
                    />
                    <span className="bub-ml-1">Community</span>
                </li>
                <li>
                    <input 
                     type="checkbox"
                     checked={checked.comment_likes}
                     onChange={handlecheck}
                     id="comment_likes"
                     />
                    <span className="bub-ml-1">Notify me when someone like or reply to my comment</span>
                </li>
                <li>
                    <input type="checkbox"
                      checked={checked.events}
                      onChange={handlecheck}
                      id="events"
                    />
                    <span className="bub-ml-1">Email me about the events I have joined</span>
                </li>
                <li>
                    <input type="checkbox" 
                      checked={checked.book_arrival}
                      onChange={handlecheck}
                      id="book_arrival"
                    />
                    <span className="bub-ml-1">Email me about new book arrivals</span>
                </li>
                </ul>
            </div>
        </DashboardSettingsLayout>
    )
}