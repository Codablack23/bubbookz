import { useState } from 'react'
import BooksLayout from '~/components/layout/Books/bookLayout'
import RecommendedBook from '~/components/widgets/books/RecBooks'
import Book from '~/components/widgets/books/Book'

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
                <div className="BookList">
                  <Book view={view}/>
                  <Book view={view}/>
                  <Book view={view}/>
                </div>
            </div>
        </BooksLayout>
    )
}