import Link from 'next/link'

export default function RecommendedBooks(){
    return(
        <div className="recommended-book flex ">
        <div className="img-container">
            <img src="/images/book1.svg" />
        </div>
        <div className="book-details w-70">
            <div className='flex align-items-center justify-content-space-between'>
               <div>
                   <p className="small-16">Principles Of General Chemistry</p>
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