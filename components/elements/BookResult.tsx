import { message } from "antd";
import Image from "next/image";
import { useContext } from "react";
import { WishListContext } from "~/context/cart/WishList";
import {Ratings} from "~/helpers/getRatings"

export default function BookResult({book,isOnWishList}):JSX.Element{
    const {wishListActions} = useContext(WishListContext)
    function handleClick(){
        wishListActions.removefromWishList(book.book_id)
        message.success(`${book.title} has been removed from your wishlist`)
    }
    return(
        <div className="bub__book-result br card bg-white">
          <header className="cover w-100">
            <Image 
            src={book.book_img}
            alt={"book"}
            height="100%"
            width={"100%"}
            layout={"responsive"}
            />
            <p className="wishlist card bg-white" onClick={handleClick}>
               {!isOnWishList?(
                 <i className="bi bi-heart text-theme"></i>
               ):<i className="bi bi-heart-fill bub-text-red"></i>}
            </p>
          </header>
          <div className="description bub-p-2">
            <p className="fw-bold small-14">{book.title}</p>
            <p className="text-disabled small-13 bub-mb-1">By: {book.author}</p>
            <p className="fw-bold bub-mb-1">N{book.price}</p>
            <div>
               <Ratings end={4}/>
            </div>
          </div>
        </div>
    )
}