const actions = [
    {
      src:"/images/cat2.svg",
      head:"Upcoming Events",
      link:""
    },
    {
      head:"Today’s features",
      link:"",
      src:"/images/category1.svg",
    },
    {
      head:"Trending on our Blog",
      link:"",
      src:"/images/cat3.svg",
    }
  ]

export default function HomeAction(){
    return(
        <div className="container">
        <div className="row actions">
           {actions.map(action=>(
               <div key={action.head} className="col-md-12 col-4">
                <div className="action vh-40 p-relative">
                <img src={action.src} alt="" className='img-fluid vh-40' />
                  <div className="mask vh-40">
                 </div>
                 <div className="mask-text-container">
                   <h1 className="font-a text-white" > {action.head}</h1>
                   <p className='see-all-text text-white'><span>See All</span> <span><i className="bi bi-chevron-right"></i></span></p>
                 </div>
                </div>
               </div>
           ))}
         </div>
        </div>
    )
}