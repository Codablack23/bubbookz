export default function Hero({showButton}){
    return(
        <section className="community-hero w-100 container min-vh-60 min-vh-75">
        <div className="hero-overlay w-100">
            <img src={"/images/hero_overlay.svg"}/>
        </div>
        <div className="hero-content text-sm-center  w-70 w-sm-95 m-md-auto">
            <h1 className="text font-a">Welcome to <br />
             <span className="text-theme font-a">Bubbookz </span>
              Community
            </h1><br />
            <p className="sub-text"> Connect with like minds, course mates and more... </p><br />
            {showButton?<button className="btn w-40 w-md-60 w-sm-80 bg-theme text-white">Create community</button>:null}
        </div>
      </section>
    )
}