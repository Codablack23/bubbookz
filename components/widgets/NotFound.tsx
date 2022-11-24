import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface Props{
  title:string,
  backLink?:string
  children?:JSX.Element | ReactNode
}

export default function NotFound({title,children,backLink}:Props):JSX.Element{
    return(
        <div className='w-100 min-vh-50 text-center flex justify-content-center align-items-center'>
        <div>
        <Image src={"/images/404.svg"} alt={"not found"} height={"100%"} width={"520px"}/>
        <h3 style={{textTransform:"capitalize"}}>No {title} Available</h3>
        {children?children:(
           <Link href={backLink?backLink:"/"}>
           <a className={"bub-text-primary"}>Back</a>
           </Link>
        )}
        </div>
      
      </div>
    )
}