import { Image } from "antd"
import Link from "next/link"
import { ChangeEventHandler, useContext, useState } from "react"
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout"
import NotFound from "~/components/widgets/NotFound"
import { BookContext } from "~/context/book/BookContext"


function OnlineBook({book}){
    return(
        <div className="grid-col-6 grid-col-sm-12 bub__online-book">
        <div className="bub__book-cover">
            <Image src={book.book_img} alt="" />
        </div>
        <div className="bub__book-desc w-65 w-md-90 m-md-auto">
            <p className="text-white small-17 fw-bold bub-case-capital">{book.title}</p>
            <p className="text-disabled bub-case-capital small-14"
            style={{marginBottom:"0.5em"}}
            >by {book.author}</p>
            <p className="text-white small-16">
                {book.book_description}
            </p>
           <Link href={`/books/${book.book_id}`} passHref>
           <button className="btn-small bg-theme text-white w-85">Go to Book</button>
           </Link>
        </div>
      </div>
  
    )
}
export default function OnlineBooksPage(){
    const [query,setQuery] = useState("")
    const {bookData} = useContext(BookContext)
    const handleInput:ChangeEventHandler<HTMLInputElement>=(e)=>{
      setQuery(e.target.value)
    }
    return(
        <DashboardLayout activePage={"online-books"}>
          <div className="bub__dashboard-online-books-page">
              <div className="bub__search-container">
                  <span className="bi bi-search"></span>
                  <input type="text" value={query} onChange={handleInput} placeholder="Search Books Online" />
              </div>
              {bookData
              .filter(book=>book.format==="download")
              .filter((book)=>book.title.toLowerCase().includes(query.toLowerCase().trim()))
              .length > 0?(
              <div className="bub-grid bub-grid-center bub__online-books-overflow">
                {bookData
                .filter(book=>book.format==="download")
                .filter((book)=>book.title.toLowerCase().includes(query.toLowerCase().trim()))
                .map(book=>
                    <OnlineBook key={book.book_id} book={book}/>    
                )}
                </div>
               ):<NotFound title={"Online Book"}/>
               }
          
          </div>
        </DashboardLayout>
    )
}