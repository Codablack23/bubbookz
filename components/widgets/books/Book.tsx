import Image from "next/image"

export default function Book({view}){
  function getRatings(end,star){
    return new Array(end).fill("").map(el=>
      <span key={""}>
        <i className={`bi ${star} text-star`}></i>
      </span>
    )
  }
    return(
        <div className={`Book ${view?"grid grid-col-4 grid-col-md-6":"list grid-col-12"}`}>
          <div className="book-cover">
            <Image src="/images/book1.svg" width={"100%"} height={"100%"} layout="responsive" alt="book"/>
          </div>
          <div className="book-info w-70 w-sm-100">
            <p className="fw-bold fw-reg">Principles Of General Chemistry</p>
            <p className="small-14 text-disabled">By Mariano Diego</p><br />
              <div className="book-ratings">
              {getRatings(4,"bi-star-fill" )}
              {getRatings(1,"bi-star" )}
              </div>
              <p className="book-price">N5,000</p><br />
              <div className="w-55 add-to-cart">
              <button className="btn bg-theme w-100 small-14">Add To Cart</button>
              </div>
          </div>
        </div>
    )
}