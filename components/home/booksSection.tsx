import Link from "next/link";

function getRatings(end,star){
  return new Array(end).fill("").map(el=>
    <span key={""}>
      <i className={`bi ${star} text-star`}></i>
    </span>
  )
}
function Scroll(x,id){
  id = id.replaceAll(" ","-")
  const grid = document.querySelector(`.book-grid-${id}`)
  grid.scrollBy(x,0)
}
export default function BooksSection({heading,children,books}){
    return(
      <section className="books-section container">
          <header className="books-header flex justify-content-space-between align-items-center">
            <p>{heading}</p>
            <Link href={"/"}>
             <a className="view-all-link text-theme">View all </a>
            </Link>
          </header>
          <div className={`book-grid book-grid-${heading.replaceAll(" ","-")}`}>
                 {books.map(book=>(
                   <div className="book card" key={""}>
                     <div className=" ">
                     <div className="book-img-container">
                       <img src={book.img} alt="" />
                       <button className="wishlist card">
                         <i className="bi bi-heart text-theme"></i>
                       </button>
                     </div>
                    <div className="book-info">
                      <h3 className="book-title">{book.name}</h3>
                      <p className="book-author"><span>By</span> {book.author}</p><br />
                      <h1 className="book-price">N {book.price}</h1>
                      <br />
                      <div className="ratings-container flex">
                        {getRatings(book.ratings,"bi-star-fill" )}
                        {getRatings(5 -book.ratings,"bi-star" )}
                      </div>
                    </div>
                     </div>
                   </div>
                 ))}
               </div>
                  <button className="prev card" onClick={()=>Scroll(-200,heading)}>
                    <i className="bi bi-chevron-left"></i>
                 </button>
                 <button className="next card" onClick={()=>Scroll(200,heading)}>
                 <i className="bi bi-chevron-right "></i>
           </button>
      </section>
    )
}