import { useContext } from "react";
import BookResult from "~/components/elements/BookResult";
import HomeLayout from "~/components/layout/home/HomeLayout";
import { WishListContext } from "~/context/cart/WishList";

export default function Wishlist():JSX.Element{
    const {wishList} = useContext(WishListContext)
    
    return(
        <HomeLayout title={"Book Search Results"}>
        <div className="container bub-mt-2">
        <header className="text-center bub-mb-4 bub-mt-md-2">
           <p className="small-26 font-a fw-reg text-accent-1">Your Wishlist</p>
         </header>
         <div className="bub-grid">
         {wishList.map(book=>
            <div className="grid-col-3 grid-col-md-6" key={book.book_id}>
              <BookResult book={book} isOnWishList={true}/>
          </div>
         )}
         </div>
        </div><br />
       </HomeLayout>
    )
}