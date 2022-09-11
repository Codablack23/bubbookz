import { useContext, useEffect, useState } from 'react'
import BooksLayout from '~/components/layout/Books/bookLayout'
import RecommendedBook from '~/components/widgets/books/RecBooks'
import Book from '~/components/widgets/books/Book'
import SortWidget from "~/components/elements/filter";
import { AuthContext } from '~/context/auth/AuthContext';
import BookFunctions from '~/helpers/Books'
import { Skeleton } from 'antd';
import NotFound from '~/components/widgets/NotFound';
import {LoadingState} from '~/components/widgets/loaders/allBooks';

export default function Books(){
    
    const [view,setView] = useState(true)
    const [books,setBooks] = useState([])
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const {state} = useContext(AuthContext)
    const [isLoading,setIsLoading] = useState(true)


    async function getBooks(){
        const response = await BookFunctions.getBooks()
        setIsLoading(false)
        if(response.status == "success"){
            setBooks(response.books)
        }
    }
    useEffect(()=>{
        getBooks()
    },[])
    useEffect(()=>{
       setIsLoggedIn(state.isLoggedIn)
    },[state])
    return (
        <BooksLayout category={""}>
              {isLoggedIn && (
               <div className="recommended">
              </div>
             )}
            <div className="BookList-container">
                <header>
                    <h1>All</h1>
                    <div>
                        <button className="change-list" onClick={()=>setView(false)}>
                        <i className={`bi bi-list-ul ${!view?"text-theme":""}`}></i>
                        </button>
                        <button className="change-grid" onClick={()=>setView(true)}>
                            <i className={`bi bi-grid-fill ${view?"text-theme":""}`}></i>
                        </button>
                    </div>
                </header>
                <div className="flex justify-content-flex-end">
                   <div className='w-20 w-md-35 w-sm-45 bub-mb-3'>
                   <SortWidget/>
                   </div>
                </div>
                {isLoading?
                 <>
                   <LoadingState isGrid={view}/>
                   <LoadingState isGrid={view}/>
                   <LoadingState isGrid={view}/>
                 </>
                :books.length > 0 ? (
                <div className="BookList bub-grid">
                  {books.map(book=>(
                    <Book book={book} key={book.book_id} view={view}/>
                  ))}
                
                 </div> 
                ):<NotFound title={"Books"}/>
                }
            </div>
        </BooksLayout>
    )
}