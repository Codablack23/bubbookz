import Hero from '~/components/widgets/home/hero'
import HomeAction from '~/components/widgets/home/homeAction'
import HomeLayout from '~/components/layout/home/HomeLayout'
import BooksSection from '~/components/widgets/home/booksSection'
import {books} from "../data/books"
import CreatedCommunities from '~/components/widgets/community/CreatedCom'


export default function Home() {
  return (
    <HomeLayout title={"Home"}>
       <Hero/>
       <HomeAction/>
       <div className="container">
       <div className="row w-100">
       <div className="col-9 col-md-12">
             <BooksSection heading={"New Arrivals"} books={books.new_arrival}/>    
             <BooksSection heading={"Popular"} books={books.popular}/>       
             <BooksSection heading={"Recommended For You"} books={books.recommended}/>       
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
