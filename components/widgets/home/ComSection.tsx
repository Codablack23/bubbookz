import { Skeleton } from 'antd'
import Image from 'next/image'
import Link from 'next/link'

interface ComProps{
   community:any[],
   [key:string]:any
}

function LoadingScreen(){
    return (
        <div className='grid-col-6 grid-col-md-12 card br bub-p-2 bub-grid'>
         <div className="grid-col-4 grid-col-md-12">
            <Skeleton.Button
            active
            block
            style={{height:"200px"}}
            />
         </div>
         <div className="grid-col-8 gric-col-md-12">
            <Skeleton
            active
            paragraph={{rows:5}}
            />
         </div>
        </div>
    )
}

function Community({community}){
  return (
    <div className='grid-col-6 grid-col-md-12 card br bub-p-2 bub-grid'>
        <div className="grid-col-4 grid-col-sm-12">
        <Image className="br"  src={community.banner_img} layout="responsive" width={"100%"} height={"100%"} alt="cover"/>
        </div>
        <div className="grid-col-8 grid-col-sm-12 bub-pt-2 bub-p-sm-2">
        <header className="flex align-items-center justify-content-space-between">
        <div>
            <p className="fw-bold bub-case-capital">{community.title}</p>
            <p className="text-disabled small-14 bub-mb-1">By {community.creator}</p>
        </div>
        </header>
        <div className="text-disabled flex align-items-center">
        <p className="bub-mr-1">
            <i className="bi bi-people bub-text-dark fw-bold bub-mr-1"></i>
            <span className="small-14">{community.members.length} members</span> 
        </p>
        <p className="bub-mr-1">
            <i className="bi bi-hand-thumbs-up bub-text-dark fw-bold bub-mr-1"></i>
            <span className="small-14">{community.likes} Likes</span> 
        </p>
            <p className="bub-mr-1">
            <i className="bi bi-chat-left-text bub-text-dark fw-bold bub-mr-1"></i>
            <span className="small-14">500 messages</span> 
        </p>
        </div>
        <div className="flex d-md-block justify-content-space-between bub-pr-1">
        <p className="small-14">
        {community.about.slice(0,100) + "..."}
        </p>
        </div>
        </div>
    </div>
  )
}
export default function CommunitySection({community}){
 return (
    <div className='bub-mt-3'>
         <header className="flex justify-content-space-between align-items-center" style={{marginBottom:"1.2em"}}>
            <p className='bub-text-accent fw-bold bub-pl-1 bub-pt-1 bub-pb-1'
            style={{
                borderLeft:"4px solid #1DCEFD"
            }}
            >Latest From Our Community</p>
            {community.length > 0?
             <Link href={"/community"}>
             <a className="view-all-link text-theme">View all </a>
            </Link>
            :null}
          </header>
        <div className="bub-grid">
        {community.length>0?
        community.map(com=>(
            <Community key={com.id + "com_id"} community={com}/>
        ))
        :new Array(2).fill("loading").map((item,index)=>(
            <LoadingScreen key={index + "loading_1"}/>
          ))}
    </div>
    </div>
 )
}