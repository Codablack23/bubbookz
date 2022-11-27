import Hero from '~/components/widgets/home/hero'
import HomeAction from '~/components/widgets/home/homeAction'
import HomeLayout from '~/components/layout/home/HomeLayout'
import BooksSection from '~/components/widgets/home/booksSection'
import CreatedCommunities from '~/components/widgets/community/CreatedCom'
import { BookContext } from '~/context/book/BookContext'
import { AuthContext } from '~/context/auth/AuthContext'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { Carousel } from 'antd'
import { CommunitiesContext } from '~/context/communities/ComContext'
import CommunitySection from '~/components/widgets/home/ComSection'
import EventsSection from '~/components/widgets/home/EventsSection'
const locations = [
  {
    image:"/images/cat2.svg",
    name:"ofrima junction"
  },
  {
    image:"/images/cat3.svg",
    name:"Choba junction"
  },
  {
    image:"/images/category1.svg",
    name:"Uniport junction"
  },
  {
    image:"/images/community/c1.svg",
    name:"UPTH junction"
  }
]
interface Props{
  index:number,
  locations:{image:string,name:string}[],
  [key:string]:any
}
function FreeDeliveryLocations({index,locations}:Props){
  return (
    <Carousel autoplay autoplaySpeed={3000} dots={false}>
      {locations.map(el=>(
            <div key={el.name} id='d-location'>
            <Image src={el.image} height={"100%"} layout="responsive" width="100%" alt="community" />
            <p className='small-14 bub-text-accent bub-case-capital'>{el.name}</p>
            </div>
      ))}
    </Carousel>
  )
}

export default function Home() {
  const [books,setBooks] = useState<any[]>([])
  const {state} = useContext(AuthContext)
  const {bookData} = useContext(BookContext)
  const {data} = useContext(CommunitiesContext)
  const [index,setIndex] = useState(0)
 
  useEffect(()=>{
   if(bookData){
    setBooks(bookData)
   }
  },[bookData])

  useEffect(()=>{
  
  },[])
  return (
    <HomeLayout title={"Home"}>
       <Hero/>
       <HomeAction/>
       <div className="container">
       <div className="row w-100">
       <div className="col-9 col-md-12">
             <BooksSection heading={"New Arrivals"} books={books}/>   
             <br /> 
             <BooksSection heading={"Popular"} books={books}/>
             <br />    
             <EventsSection/>
             <br />
             <BooksSection heading={"Recommended For You"} books={books}/>     
         </div>
         <div className="col-3 col-md-12">
          <div className="br bub-bg-light-grey bub-p-2 text-center">
             <h4 className="bub-text-accent bub-mb-1">Free Delivery</h4>
             <p className='small-12 bub-text-black'>We offer free delivery to these locations</p>
             <FreeDeliveryLocations index={index} locations={locations}/>
          </div>
          <br />
         {state.user?
         <>  
           <CreatedCommunities heading={'Created'}/><br/>
           <CreatedCommunities heading={'Joined'}/>
         </>
         :<Image src="/images/community/join.svg" height={"100%"} layout="responsive" width="100%" alt="community" />         
         }
          </div>
       </div>
       <br />
       <CommunitySection community={data.slice(0,2)}/>  
       </div>
    </HomeLayout>
  )
}
