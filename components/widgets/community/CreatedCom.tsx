import Link from "next/link";

export default function CreatedCommunities({heading}){
    return(
        <div className="created-communities card w-100 min-vh-50 curved p-relative">
        <header>
           <h1 className="small-18 fw-reg"> Communities You {heading}</h1>
        </header>
       <div style={{padding:'0.5em'}}>
       <div className="com flex justify-content-space-between">
        <div className="img-container w-30 w-md-40 min-vh-20 curved">
          <img src="/images/community/c1.svg" alt="" className="img-fluid vh-20 curved" />
        </div>
        <div className="info w-65 w-md-40">
        <h1 className="small-16">Designers 7</h1><br />
         <p className="small-14">Lorem ipsum dolor sit amet consectetur adipisicing elit</p><br />
         <span className="small-14 text-disabled">Last Active Yesterday</span>
        </div>
        </div>
       </div>

        <p className="text-center view-all-link">
           <Link href={"/"}>
           <a className="text-theme">view all</a>
           </Link>
         </p>

      </div>
    )
}