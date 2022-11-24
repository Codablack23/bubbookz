import { Carousel } from 'antd';

export default function Hero(){
  const goToDashboard = ()=>{
    window.location.replace("/dashboard")
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
           <button className="hero-btn" onClick = {goToDashboard}>
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
           <h1 className="hero-heading">
           Adventure, Action, Comedy  <span className="text-theme">book</span> series on
           <span className="text-theme"> Bubbooks.</span>
           </h1>
           <p className="hero-text">
           Get Books for fun 
           </p>
           <button className="hero-btn" onClick = {goToDashboard}>
             <span>Shop Now</span>
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


