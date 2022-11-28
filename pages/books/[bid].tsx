import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import HomeLayout from '~/components/layout/home/HomeLayout'
import BooksSection from '~/components/widgets/home/booksSection'
import NewsLetter from  '~/components/widgets/home/NewsLetter'
import { BookRating } from  '~/components/widgets/books/DescTab'
import {books} from "~/data/books"
import {getRatings} from '~/helpers/getRatings'
import {useRouter} from "next/router"
import { message, Skeleton, Tabs,Image } from 'antd'
import Books from '~/helpers/Books'
import NotFound from '~/components/widgets/NotFound'
import { CartContext } from '~/context/cart/CartContext'

function SingleBookLoadingState():JSX.Element{
  return(
    <section>
      <header className="bub-grid bub-p-2">
        <div className="grid-col-4 grid-col-md-12">
          <Skeleton.Avatar
           shape='square'
           className='w-100'
           active
           size={300}
          />
        </div>
        <div className="grid-col-8 grid-col-md-12">
        <Skeleton paragraph={{rows:8}} active/>
        </div>
      </header>
      <div className='bub-p-2'>
      <Skeleton paragraph={{rows:10}} active/>
      </div>
    </section>
  )
}
function BookInfo({book}){
  const {TabPane} = Tabs
  const {book_details} = book
  const details = JSON.parse(
    JSON.parse(book_details)
   )
  return(
    <div className="product-desc w-100 m-auto">
    <Tabs defaultActiveKey='1'>
     <TabPane tab={"Description"} key={"1"}>
     <div className="book-description w-100 text-accent">
        <p className="small-16">
        {book.book_description}
        </p>
      </div>
     </TabPane>
     <TabPane tab={"Product Details"} key={"2"}>
     <div className="book-product-details">
      <p>ISBN-10: {details.ISBN}</p>
      <p>GTIN-13:{details.GTN}</p>
      <p>Publisher: {details.publishser}</p>
      <p>Copyright: {details.copyright}</p>
      {/* <p>Book Binding: Hardcover</p> */}
      <p>Pages: {details.pages}</p>
      <p>Weight: {details.weight}</p>
      <p>Dimensions(in) (L x W x H): {details.dimension}</p>
    </div>
     </TabPane>
    <TabPane tab={"Ratings"} key={"3"}>
      <BookRating/>
    </TabPane>
    </Tabs>
    </div>
  )
}
export default function BookPage(){
  const {dispatch} = useContext(CartContext)
  const [relatedBooks,setRelatedBooks] = useState([])
  const [book,setBook] = useState<any>({})
  const [isLoading,setIsLoading] = useState(true)
    const [quantity,setQuantity] = useState(1)
    const Router = useRouter()
    const increaseQuantity = (increment)=>{
        if(quantity > 0){
          setQuantity(prev=>prev + increment)
        }
        if(quantity == 0){
            setQuantity(1)
        }
    }
   
    function handleAddToCart(bookItem){
      dispatch({
        type:"ADD_TO_CART",
        data:{book:bookItem}
      })
      message.success(`${book.title} added to your cart successfully`)
    }
    useEffect(()=>{
      async function getBook(){

        console.log(Router.query.bid)
        if(Router.query.bid){
          setIsLoading(true)
          const response = await Books.getBook(Router.query?.bid as string)
          const bookResponse = await Books.getBooks()
          setIsLoading(false)
          if(response.status == "success"){
             setBook(response.book)
             console.log(response.book)
             const currentBook = response.book
             if(bookResponse.status == "success"){
              const bookTags = response.book.tags.split(",")
              console.log(bookTags)
              setRelatedBooks(
                bookResponse.books
                .filter(relatedBook=>relatedBook.book_id != Router.query.bid)
                .filter(mainBook=>{
                       if( 
                       mainBook.department == currentBook.department
                      || mainBook.faculty == currentBook.faculty      
                                    
                      ){
                      return mainBook
                    }
                })
              )
            }
          }
        }
        
      }
      getBook()
    },[Router])
    
    return(
        <HomeLayout title={isLoading?"loading":book.title}>
            <div className="container book-page">
              {isLoading?
              <SingleBookLoadingState/>
              :Object.entries(book).length > 0?
              <>
              <div className="book-page-header w-100 m-auto flex flex-wrap align-items-flex-start justify-content-space-between"
              style={{textTransform:"capitalize"}}
              >
                  <div className="book-details w-75 w-md-100">
                     <div className="book-cover">
                         <Image src={book.book_img} height={"100%"} width={"100%"} alt=""/>
                         
                     </div>
                     <div className="book-info w-50 w-md-50 w-sm-90">
                         <p 
                           className="fw-reg" 
                           style={{textTransform:"capitalize"}}>{book.title}</p>
                         <p 
                         className="small-14 text-disabled"
                         style={{textTransform:"capitalize"}}
                         >{book.author}</p><br />
                         {getRatings(4)}
                         <br />
                         <p>Format:{book.format}</p><br />
                         <p className="small-24 fw-bold">N{book.price}</p><br />

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
                         <p className="small-14">Stock: {book.quantity} pcs</p>
                         <br />
                         <button className="btn w-100 bg-theme"
                         onClick={()=>{
                           handleAddToCart({
                            ...book,
                            quantity,
                            total:book.price * quantity
                           })
                         }}
                         >Add to Cart</button>
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
               <BookInfo book={book}/><br />
              </>
              :<NotFound title={"Book"}/>
              }
              {relatedBooks.length > 0 && <BooksSection heading={"Related"} books={relatedBooks}/>    }
              <p className='bub-mt-1 '></p>
              {/* <BooksSection heading={"You May Like"} books={books.popular}/>     */}
              </div>
         <NewsLetter/>
        </HomeLayout>
    )
}