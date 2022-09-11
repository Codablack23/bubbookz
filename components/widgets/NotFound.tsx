import Image from "next/image"
import Link from "next/link"

export default function NotFound({title}):JSX.Element{
    return(
        <div className='w-100 min-vh-50 text-center flex justify-content-center align-items-center'>
        <div>
        <Image src={"/images/404.svg"} alt={"not found"} height={"100%"} width={"520px"}/>
        <h3 style={{textTransform:"capitalize"}}>No {title} Available</h3>
        <Link href={"/"}>
        <a className={"bub-text-primary"}>Back Home</a>
        </Link>
        </div>
      
      </div>
    )
}