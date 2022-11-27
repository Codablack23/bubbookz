import { Carousel } from 'antd';

export default function Hero(){
  const goToPage = (link)=>{
     return ()=> window.location.replace(`/${link}`)
  }  
  return(
    <Carousel autoplay dots={{className:"thumb"}}>
        <div className="Hero"> 
          <div className="hero-content">
           <h1 className="hero-heading">
           You’ll Find the worlds best <span className="text-theme">book</span> series on
           <span className="text-theme"> Bubbooks.</span>
           </h1>
           <p className="hero-text">
           Get Books recommended to you according to your course of study.
           </p>
           <button className="hero-btn" onClick = {goToPage("dashboard")}>
             <span>Go To DashBoard</span>
           <span>
             <span></span>
             <i className="bi bi-arrow-right"></i>
           </span>
           </button>
         </div>
         </div>
         <div className='Hero bg-2'>
          <div className="hero-content">
           <h1 className="hero-heading text-white">
          Get Access to Our<span className="text-theme"> communities</span> and 
           <span className="text-theme"> interact </span> with like minds
           </h1>
           <p className="hero-text">
           
           </p>
           <button className="hero-btn" onClick = {goToPage("community")}>
             <span>Visit Communities</span>
           <span>
             <span></span>
             <i className="bi bi-arrow-right"></i>
           </span>
           </button>
         </div>      
        </div>
        <div className='Hero bg-3'>
          <div className="hero-content">
           <h1 className="hero-heading text-white">
          Buy <span className="text-theme"> Tickets</span> for 
           <span className="text-theme"> Upcoming </span> and Educative Events
           </h1>
           <p className="hero-text">
           
           </p>
           <button className="hero-btn" onClick = {goToPage("events")}>
             <span>See Events</span>
           <span>
             <span></span>
             <i className="bi bi-arrow-right"></i>
           </span>
           </button>
         </div>      
        </div>
      </Carousel>
    )
}


