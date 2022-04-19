import HomeLayout from '../../components/layout/home/HomeLayout'

export default function Events(){
    return(
       <HomeLayout title={"Events"}>
         <header className='events--hero-section'>
            <div className="hero--overlay">
                     <img src="/images/events/hero_overlay.svg" alt="" />
              </div>
             <div className="hero-content container w-40 w-md-70 w-sm-100">
                 <h1 className="hero-heading font-a">What you need is an <span className='font-a text-theme'>Event</span>  to remember for a lifetime.</h1><br />
                 <p className="hero-text">- Rehan Waris</p>
             </div>
         </header>
       </HomeLayout>
    )
}