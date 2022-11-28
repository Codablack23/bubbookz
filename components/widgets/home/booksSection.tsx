import { message, Skeleton,Image} from "antd";
import Link from "next/link";
import { useContext } from "react";
import { WishListContext } from "~/context/cart/WishList";

function LoadingBook(){
  return (
   <div className="book card bg-white">
     <Skeleton.Button
     active={true}
     block
     style={{height:"200px"}} 
    />
    <div className="bub-mt-2">
    <Skeleton
    active={true}
    paragraph={{rows:4}}
    />
    </div>
   </div>
  )
}
function getRatings(end,star){
  return new Array(end).fill("").map((el,i)=>
    <span key={i}>
      <i className={`bi ${star} text-star`}></i>
    </span>
  )
}
function BookWidget({book}){
  const {wishList,wishListActions} = useContext(WishListContext) 

  const addToWishList = (book)=>()=>{
     const checkWishList = wishList.find(item=>item.book_id ===  book.book_id)
     if(!checkWishList){
       wishListActions.addToWishList(book)
       message.success(`${book.title} was added to wishlist successfully`)
     }else{
      wishListActions.removefromWishList(book.book_id)
      message.success(`${book.title} was removed from wishlist successfully`)
     }
  }
  return(
    <div className="book card bg-white" key={""}>
    <div className=" ">
   
   <div className="book-img-container">
      <Link href={`/books/${book.book_id}`} passHref>
      <Image height={"100%"} width={"100%"} style={{maxWidth:"250px"}} src={book.book_img} alt={book.title}  />
      </Link>
       {wishList.find(item=>item.book_id === book.book_id)?
          <button className="wishlist card bub-bg-red" onClick={addToWishList(book)}>
          <i className="bi bi-heart text-white"></i>
        </button>
       :<button className="wishlist card" onClick={addToWishList(book)}>
       <i className="bi bi-heart text-theme"></i>
     </button>}
    </div>
  
   <br />
   <div className="book-info">
     <h3 className="book-title">{book.title}</h3>
     <p className="book-author"><span>By</span> {book.author}</p>
     <h1 className="book-price">N {book.price}</h1>
     <br />
     <div className="ratings-container flex">
       {getRatings(4,"bi-star-fill" )}
       {getRatings(5 - 4,"bi-star" )}
     </div>
   </div>
    </div>
  </div>
  )
}
function Scroll(x,id){
  id = id.replaceAll(" ","-")
  const grid = document.querySelector(`.book-grid-${id}`)
  grid.scrollBy(x,0)
}
export default function BooksSection({heading,books}){
    return(
      <section className="books-section">
          <header className="books-header flex justify-content-space-between align-items-center" style={{marginBottom:"1.2em"}}>
            <p>{heading}</p>
            {books.length > 0?
             <Link href={"/books?category=all"}>
             <a className="view-all-link text-theme">View all </a>
            </Link>
            :null}
          </header>
          <div className={`book-grid book-grid-${heading.replaceAll(" ","-")}`}>
                {books.length > 0?
                 books.map((book,i)=>(
                  <BookWidget key={`${i}-all-books`} book={book}/>
                 ))
                :new Array(4).fill("").map((item,index)=>(
                  <LoadingBook key={`${index}-empty`}/>
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