import Image from 'next/image'
import Link from 'next/link'

export default function RecommendedBooks(){
    return(
        <div className="recommended-book bub-grid bub-mb-sm-2">
        <div className="img-container grid-col-4  grid-col-sm-12 bub-mb-sm-2">
            <Image src="/images/book1.svg" height={"85vh"} width={"100%"} alt="book" layout='responsive'/>
        </div>
        <div className="book-details grid-col-8 grid-col-sm-12">
            <div className='flex align-items-center justify-content-space-between'>
               <div>
                   <p className="fw-bold">Principles Of General Chemistry</p>
                   <p className="text-disabled small-14">By Mariana P.Diego</p>
               </div>
              <p
               className="wishlist card">
                  <i className="bi bi-heart"></i>
              </p>
            </div><br />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant ferment Mauris sit viverra senectus nulla interdum habitasse vitae.
            </p>
            <Link href="/">
                <a className="text-theme small-14">Learn More</a>
            </Link>
            <div className="ratings">

            </div>
            <button className="btn bg-theme w-80">
                Add to cart
            </button>
        </div>
    </div>
    )
}