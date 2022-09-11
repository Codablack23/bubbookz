import Image from "next/image";

interface ComProps{
    isActive:string,
    community:{
        title:string,
        about:string,
        banner_img:string,
        likes:string | number
        members:string[]
        [key:string]:any
    }
  }

export default function Community({isActive,community}:ComProps):JSX.Element{
    return(
        <div className="bub__dashboard-community w-100 min-vh-30 bub-grid card br bub-mb-3">
           <div className="grid-col-3 grid-col-sm-12 vh-min-md-20 bub-p-2">
              <Image className="br"  src={community.banner_img} layout="responsive" width={"100%"} height={"100%"} alt="cover"/>
           </div>
           <div className="grid-col-9 grid-col-sm-12 bub-pt-2 bub-p-sm-2">
            <header className="flex align-items-center justify-content-space-between">
                <div>
                    <p className="fw-bold bub-case-capital">{community.title}</p>
                    <p className="text-disabled small-14 bub-mb-2">By {community.creator}</p>
                </div>
              {isActive==="created"?
              <button className="btn-small">
                  <i className="bi bi-pencil"></i>
                </button>
               :null}
            </header>
            <div className="text-disabled flex align-items-center">
                <p className="bub-mr-1">
                    <i className="bi bi-people bub-text-dark fw-bold bub-mr-1"></i>
                    <span className="small-14">{community.members.length} members</span> 
                </p>
                <p className="bub-mr-1">
                    <i className="bi bi-hand-thumbs-up bub-text-dark fw-bold bub-mr-1"></i>
                    <span className="small-14">{community.likes} members</span> 
                </p>
                    <p className="bub-mr-1">
                    <i className="bi bi-chat-left-text bub-text-dark fw-bold bub-mr-1"></i>
                    <span className="small-14">500 members</span> 
                </p>
            </div>
            <div className="flex d-md-block justify-content-space-between bub-mt-2 bub-pr-1">
              <p className="w-50 w-md-85 w-sm-100">
              {community.about}
              </p>
            {isActive==="created"?
                <div className="flex align-items-center">
                <p className="bub-mr-1">Status:</p>
                <button className="btn-small bub-bg-primary">Pending</button>
              </div>
            :null}
            </div>
           </div>
        </div>
    )
}