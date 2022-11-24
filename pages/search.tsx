import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import BookResult from "~/components/elements/BookResult";
import HomeLayout from "~/components/layout/home/HomeLayout";
import NotFound from "~/components/widgets/NotFound";
import { BookContext } from "~/context/book/BookContext";
import { WishListContext } from "~/context/cart/WishList";

export default function SearchResult():JSX.Element{
    const [books,setBooks] = useState<any[]>([])
    const Router = useRouter()
    const {wishList} = useContext(WishListContext)
    const {bookData} = useContext(BookContext)

    useEffect(()=>{
      if(Router.query.book_title !== undefined){
        const searchRes = bookData.
        filter(book=>book.title.toLowerCase().
        includes((Router.query.book_title as string).toLowerCase()))
        console.log({searchRes,bookData})
        setBooks(searchRes)
      }
    },
    [bookData,Router])

    return(
        <HomeLayout title={"Book Search Results"}>
         <div className="container bub-mt-2">
         <header className="text-center bub-mb-4 bub-mt-md-2">
            <p>{books.length} result for <span className="text-theme">{Router.query.book_title}</span></p>
          </header>
          {books.length > 0?
             <div className="bub-grid">
             {books.map(book=>(
                <div key={book.book_id} className="grid-col-3 grid-col-md-6">
                    <BookResult 
                    isOnWishList={wishList.find(w=>w.book_id === book.book_id)?true:false} 
                    book={book}/>
                </div>
              ))}
             </div>
            :<NotFound title="results"/>}
      
         </div><br />
        </HomeLayout>
    )
}