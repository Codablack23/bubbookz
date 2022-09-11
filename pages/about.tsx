import HomeLayout from '../components/layout/home/HomeLayout'
import Link from 'next/link'
export default function About(){
    return(
        <HomeLayout title={"About Us"}>
          <header className="about-hero">
              <p>We don’t just bring you any book</p>
              <h1 className='font-a'>We make your study life easy</h1>
          </header>
          <section className="get-to-know container">
             <h1>Get To Know Us</h1><br />
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id facilisis ultricies sit enim. Enim, proin sociis in pulvinar amet lectus cursus. Blandit sit vitae quisque risus, nisl ut urna adipiscing vestibulum. Ac at ut massa urna, rutrum dictum. Congue ultrices dignissim enim sed. Sit ut dictum non...</p>
          </section>
          <section className="container">
              <div className="row">
                <div className="col-4 col-md-12 about-col">
                    <div className="img-container w-100">
                      <img src="/images/about/img1.svg" className='w-100' alt="" />
                    </div>
                    <h1 className="">Discover Exiciting Books</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam dictum integer.</p>
                </div>
                <div className="col-4 col-md-12 about-col">
                    <div className="img-container w-100">
                    <img src="/images/about/img2.svg" className='w-100' alt="" />
                    </div>
                    <h1 className="">Get acquianted with our Reading culture</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam dictum integer.</p>
                </div>
                <div className="col-4 col-md-12 about-col">
                    <div className="img-container w-100">
                    <img src="/images/about/img3.svg" className='w-100' alt="" />
                    </div>
                    <h1 className="">A platform built on common interests for our love for reading and interaction</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam dictum integer.</p>
                </div>
              </div>
          </section>
          <section className="about-get-started w-100">
            <div className="first-col container">
              <h1 className='font-a'> Lets Get You Started</h1>
            </div>
            <div className="container side-col">
              <div className="content">
                <h1>A Place For All Book Readers, To Learn, Connect, And Interact With Your Authors</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam.</p><br />
                <Link href={"/user/signup"}>
                    <a className="get-started-btn">Create Account</a>
                </Link>
              </div>
            </div>
          </section>
        </HomeLayout>
    )
}