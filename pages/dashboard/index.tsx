import { useContext, useEffect, useState } from 'react'
import DashboardLayout from '~/components/layout/dashboard/DashboardLayout'
import SelectAccountType from '~/components/widgets/dashboard/accountType'
import LevelMenu from '~/components/widgets/dashboard/LevelMenu'
import ShelfBook from '~/components/widgets/dashboard/ShelfBook'
import NotFound from '~/components/widgets/NotFound'
import { BookContext } from '~/context/book/BookContext'


interface Book{
    title:string,
    author:string,
    book_img:string,
    book_description:string,
    format:string,
    price:string | number
    [key:string]:any
}
export default function DashBoard(){
    const [books,setBooks] = useState<Book[]>([])
    const {bookData} = useContext(BookContext)
    const levels:number[] =[
        100,200,300,400,500,600
    ]
    useEffect(()=>{
        setBooks(bookData.filter(book=>book.format === "buy"))
    },[bookData])
    
    return(
    <DashboardLayout activePage={"level"}>
        <header className="bub__level-page-header">
         <div className="bub__level-mobile">
             <select className="bub__level-select">
                 <option value="">Select Level</option>
              {levels.map(level=>(
                  <option key={level} value={level}>{level}</option>
              ))}
             </select>
             <select className="bub__level-select">
             <option value="">Select Semester</option>
             <option value="1">1st Semester</option>
             <option value="2">2nd Semester</option>
             </select>
         </div>
        <h1 className="fw-bold text-accent-1 text-center w-100">
            Hello! your Bookshelf for 1st semsester (level 100)
        </h1><br />
        </header>
       <div className="bub__dashboard-page-content">
         <LevelMenu/>
         <div className="bub__book-shelf-wrapper">
          {books.length > 0?
            books.map((book,i)=>(
                <ShelfBook book={{...book,index:i}} key={book.book_id}/>
            ))
          :<NotFound title={"books"}/>}
        </div>
     </div>
    </DashboardLayout>
    )
}
