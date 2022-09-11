import Image from "next/image"
import Link from "next/link"

export default function Book({view,book}){
  console.log(book)
  function getRatings(end,star){
    return new Array(end).fill("").map((el,i)=>
      <span key={`${i}-stars`}>
        <i className={`bi ${star} text-star`}></i>
      </span>
    )
  }
    return(
        <div className={`Book ${view?"grid grid-col-4 grid-col-md-6":"list grid-col-12"}`}>
          <Link href={`/books/${book.book_id}`} passHref>
          <div className="book-cover">
            <Image src={`${book.book_img}`} width={"100%"} height={"100%"} layout="responsive" alt="book"/>
          </div>
          </Link>
          <div className="book-info w-70 w-sm-100">
            <p className="fw-bold fw-reg">{book.title}</p>
            <p className="small-14 text-disabled">By {book.author}</p><br />
              <div className="book-ratings">
              {getRatings(4,"bi-star-fill" )}
              {getRatings(1,"bi-star" )}
              </div>
              <p className="book-price">N{book.price}</p><br />
              <div className="w-55 add-to-cart">
              <button className="btn bg-theme w-100 small-14">Add To Cart</button>
              </div>
          </div>
        </div>
    )
}