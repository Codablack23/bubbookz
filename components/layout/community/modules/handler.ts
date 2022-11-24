import { message } from "antd";
import { useState,useEffect, useContext, useMemo, Dispatch, SetStateAction } from "react";
import Communities from "~/helpers/Communities";

const getFunctions=(query:string,updateState:Dispatch<SetStateAction<number>>)=>{
    return {
        async  updateMembership(type:string,loadingHandler:Dispatch<SetStateAction<boolean>>){
            loadingHandler(true)
            const response =  type==="join"?
             await Communities.join(query as string,{})
             :await Communities.leave(query as string,{})
            loadingHandler(false)
            if(response.status === "success"){
              message.success(`You have Successfully ${type === "join"?"Joined":"Left"}`)
              updateState(prev=>prev +1)
            }else{
              message.error(response.error)
            }
           },
        async updateLike(type:string,loadingHandler:Dispatch<SetStateAction<boolean>>){
            loadingHandler(true)
            const response = type === "like"?
            await Communities.like(query as string,{})
            :await Communities.dislike(query as string,{})
            loadingHandler(false)
            if(response.status === "success"){
              updateState(prev=>prev +1)
            }else{
              console.log(response.status)
              message.error(response.error)
            }
           },
           
    }
}

export default getFunctions;