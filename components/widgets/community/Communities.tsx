type com = {
   category:string,
   community:{}[]
}

export default function Communities(props:com){
    return(
        <div className="all-communities w-70 w-md-100">
                 <header className="community-header">
                    <h1>{props.category} Communities</h1>
                    <div className="sortby-dropdown w-20 w-sm-30">
                        <span className="subscript text-theme">Sort By</span>
                        <select name="" id="">
                            <option value="">Trending</option>
                            <option value="">All</option>
                        </select>
                    </div>
                 </header><br />
                 {
                    props.community.map(com=>(
                     <div key={1} className="community card w-100 min-vh-40 d-md-block">
                     <div className="img-container w-30 w-md-100">
                       <img src="/images/community/c1.svg" alt="" />
                     </div>
                     <div className="info w-70 w-md-100">
                        <div className="title flex justify-content-space-between" style={{alignItems:"center"}}>
                          <h1 className="small-20 w-70">Welcome to Book Review</h1>
                          <button className="btn w-30 bg-theme text-white">Join</button>
                        </div>
                       <p className="text-disabled small-16">By Jennifer Anderson</p><br />
                       <div className="activity flex">
 
                          <p>
                             <i className="bi bi-people-fill text-disabled"></i>
                             <span className="text-disabled small-16">500 Members</span>
                          </p>
                          <p>
                             <i className="bi bi-hand-thumbs-up text-disabled"></i>
                             <span className="text-disabled small-16">150 Likes</span>
                          </p>
                          <p>
                             <i className="bi bi-chat-left-dots text-disabled"></i>
                             <span className="text-disabled small-16">2K comments</span>
                          </p>
 
                       </div><br />
                       <p className="description">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...
                       </p>
                     </div>
                  </div>
                    ))
                 }
                 <div className="pagination flex justify-content-space-between d-md-block">
                   <h1 className="text-disabled fw-reg">Page 1 of 20</h1>
                   <div className="pages w-60 w-md-100">
                       <span className="prev">
                           <i className="bi bi-chevron-left"></i>
                       </span>

                       <span className="page current-page">1</span>
                       <span className="page">2</span>
                       <span className="page">3</span>
                       <span className="page">4</span>
                       <span className="page">5</span>
                       <span className="page">6</span>
                       <span className="page">7</span>

                       <span className="next">
                       <i className="bi bi-chevron-right"></i>
                       </span>
                   </div>
                 </div>
     </div>
    )
}