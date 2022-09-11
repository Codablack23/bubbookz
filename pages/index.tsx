import Hero from '~/components/widgets/home/hero'
import HomeAction from '~/components/widgets/home/homeAction'
import HomeLayout from '~/components/layout/home/HomeLayout'
import BooksSection from '~/components/widgets/home/booksSection'
import CreatedCommunities from '~/components/widgets/community/CreatedCom'
import { BookContext } from '~/context/book/BookContext'
import { useContext, useEffect, useState } from 'react'


export default function Home() {
  const [books,setBooks] = useState<any[]>([])
  const {bookData} = useContext(BookContext)
 
  useEffect(()=>{
   if(bookData){
    setBooks(bookData)
   }
  },[bookData])
  return (
    <HomeLayout title={"Home"}>
       <Hero/>
       <HomeAction/>
       <div className="container">
       <div className="row w-100">
       <div className="col-9 col-md-12">
             <BooksSection heading={"New Arrivals"} books={books}/>    
             <BooksSection heading={"Popular"} books={books}/>       
             <BooksSection heading={"Recommended For You"} books={books}/>       
         </div>
         <div className="col-3 col-md-12">
            <CreatedCommunities heading={'Created'}/><br/>
            <CreatedCommunities heading={'Joined'}/>
         </div>
       </div>
       </div>
    </HomeLayout>
  )
}
