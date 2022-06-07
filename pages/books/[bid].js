import Link from 'next/link'
import { useState } from 'react'
import HomeLayout from '~/components/layout/home/HomeLayout'
import BooksSection from '~/components/widgets/home/booksSection'
import NewsLetter from  '~/components/widgets/home/NewsLetter'
import Tab from  '~/components/widgets/books/DescTab'
import {books} from "~/data/books"
import {getRatings} from '~/helpers/getRatings'



export default function BookPage(){
    const [quantity,setQuantity] = useState(1)
    const increaseQuantity = (increment)=>{
        if(quantity > 0){
          setQuantity(prev=>prev + increment)
        }
        if(quantity == 0){
            setQuantity(1)
        }
    }
    return(
        <HomeLayout title={"1"}>
            <div className="container book-page">
              <div className="book-page-header w-100 m-auto flex flex-wrap align-items-flex-start justify-content-space-between">
                  <div className="book-details w-75 w-md-100">
                     <div className="book-cover">
                         <img src="/images/book2.svg" alt="" />
                     </div>
                     <div className="book-info w-50 w-md-50 w-sm-90">
                         <p className="fw-reg">Principles Of General Chemistry</p>
                         <p className="small-14 text-disabled">By Mariana Diego</p><br />
                         {getRatings(4)}
                         <br />
                         <p>Format:Handbook</p><br />
                         <p className="small-24 fw-bold">N5,000</p><br />

                        <p>Quantity</p>
                         <div className="quantity-widget">
                            <button className='increase' disabled={quantity<2} onClick={()=>increaseQuantity(-1)}>
                              <i className="bi bi-dash-lg"></i>
                            </button>
                             <p className="book quantity">{quantity}</p>
                             <button className='decrease' onClick={()=>increaseQuantity(1)}>
                              <i className="bi bi-plus-lg"></i>
                            </button>
                         </div>
                         <p className="small-14">Stock: 500 pcs</p>
                         <br />
                         <button className="btn w-100 bg-theme">Add to Cart</button>
                     </div><br />                
                  </div>
                  <div className="w-20">
                     
                  </div>
              </div>
               <div className="share-book w-100 m-auto">
                      <p className="text-disabled small-16">Share with Friends</p><br />
                      <div className="flex align-items-center w-70">
                        <Link href={"/"}>
                          <a className="share-book-btn fb bg-fb">
                            <i className="bi bi-facebook"></i>
                          </a>
                        </Link>
                        <Link href={"/"}>
                          <a className="share-book-btn bg-twitter">
                            <i className="bi bi-twitter"></i>
                          </a>
                        </Link>
                        <Link href={"/"}>
                          <a className="share-book-btn bg-whatsapp">
                            <i className="bi bi-whatsapp"></i>
                          </a>
                        </Link>
                      </div>
               </div>
              <br />
                <div className="product-desc w-100 m-auto">
                <Tab/>
                </div><br />
              <BooksSection heading={"Related"} books={books.new_arrival}/>    
              <BooksSection heading={"You May Like"} books={books.popular}/>    
              </div>
         <NewsLetter/>
        </HomeLayout>
    )
}