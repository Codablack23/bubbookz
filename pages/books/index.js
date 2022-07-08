import { useState } from 'react'
import BooksLayout from '~/components/layout/Books/bookLayout'
import RecommendedBook from '~/components/widgets/books/RecBooks'
import Book from '~/components/widgets/books/Book'
import SortWidget from "~/components/elements/filter";

export default function Books(){
    const [view,setView] = useState(true)
    return (
        <BooksLayout category={""}>
            <div className="recommended">
                <header>
                    <h1>Recommended</h1>
                </header>
                <RecommendedBook/>
            </div>
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
                <div className="BookList bub-grid">
                  <Book view={view}/>
                  <Book view={view}/>
                  <Book view={view}/>
                </div>
            </div>
        </BooksLayout>
    )
}