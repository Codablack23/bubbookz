import { useContext, useEffect, useState } from "react";
import HomeLayout from "~/components/layout/home/HomeLayout";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import BooksSection from "~/components/widgets/home/booksSection";
import {books} from '~/data/books'
import { CartContext } from "~/context/cart/CartContext";
import { Image } from "antd";
import Link from "next/link";
import { WishListContext } from "~/context/cart/WishList";


const CartItem =({book})=>{
    const {dispatch} = useContext(CartContext)
    const {wishList,wishListActions} = useContext(WishListContext)
    const [quantity,setQuantity] = useState(parseInt(book.quantity))

    const increaseQuantity = (increment)=>{
        if(quantity > 0){
          setQuantity(prev=>prev + increment)
          console.log(quantity)
        }
        if(quantity == 0){
            setQuantity(1)
        }
    }
    function deleteCartItem(){
        dispatch({type:"REMOVE_FROM_CART",data:{book_id:book.book_Id}})
    }

    function handleWishList(book){
      return ()=>{
        const bookInWislist = wishList.find((item)=>item.book_id === book.book_id)
        if(!bookInWislist){
          wishListActions.addToWishList(book)
        }else{
         wishListActions.removefromWishList(book.book_id)
        }
      }
    }
    useEffect(()=>{
        dispatch({
          type:"UPDATE_QUANTITY",
          data:{
            book_id:book.book_id,
            quantity
          }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[quantity])
    
   return(
        <tr className="cart-item">
            <td>
                <div className="cover">
                <Image src={book.book_img} alt="" />
                </div>
            </td>
            <td>
                <p className="small-16">{book.title}</p>
                <p className="small-14 text-disabled">By {book.author}</p><br />
                <div className="flex justify-content-center">
                    {
                        wishList.find(item=>item.book_id === book.book_id)?(
                        <button className="wishlist-btn card bub-bg-red" onClick={handleWishList(book)}>
                            <i className="bi bi-heart text-white"></i>
                        </button>
                        )                        
                        :(
                        <button className="wishlist-btn card" onClick={handleWishList(book)}>
                            <i className="bi bi-heart text-theme"></i>
                        </button>
                        )
                    }
                    <button className="delete-btn" onClick={deleteCartItem}>
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </td>
            <td>
                <p className="small-14">{book.format}</p>
            </td>
            <td>
                <p className="small-14">{book.price}</p>
            </td>
            <td>
                <div className="flex justify-content-center w-100">
                <div className="quantity-widget">
                    <button className='increase' disabled={quantity<2} onClick={()=>increaseQuantity(-1)}>
                        <i className="bi bi-dash-lg"></i>
                    </button>
                        <p className="book quantity">{quantity}</p>
                        <button className='decrease' onClick={()=>increaseQuantity(1)}>
                        <i className="bi bi-plus-lg"></i>
                    </button>
                </div>
                </div>
            </td>
            <td>
            <p className="small-16 text-theme fw-bold">{book.total}</p>
            </td>
        </tr>
   )
}
export default function Cart(){
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [shipping,setShipping] = useState(0)
    const cartContext = useContext(CartContext)

    useEffect(()=>{
        const totalPrice = cartContext.cart.reduce((total,item)=>total+=item.total,0)
        setCart(cartContext.cart)
        setTotal(totalPrice)
    },[cartContext.cart])
    return(
        <HomeLayout title={"Cart"}>
        <div className="container bg-light-grey">
        <br /><br />
        <h1 className="font-a fw-reg text-accent-1 small-24">Shopping Cart({cart.length})</h1>
        <br /><br />
        {cart.length > 0?
         (<>
        <div className="table-container">
        <table className="cart-table bg-white card br w-100">
             <thead>
             <tr className="table-head">
                  <th></th>
                  <th>Your Book</th>
                  <th>Model</th>
                  <th>Unit Price(N)</th>
                  <th>Quantity</th>
                  <th>Sub Total(N)</th>
              </tr>
             </thead>
             <tbody>
             {
                cart.map(cartItem=>
                    <CartItem book={cartItem} key={cartItem.book_id}/>
                )
               }
             </tbody>
          </table>
        </div>
         <br /><br />
         <div className="w-50 w-md-80 w-sm-90" style={{marginLeft:"auto"}}>
           <p className="text-disabled small-16">Shipping fee and coupon code will be added at checkout</p><br /><br/>
           <div className="order-total flex flex-column align-items-center bg-white card br text-center"
            style={{padding:"0.8em"}}>
               <div className="flex w-80 justify-content-space-between">
                   <p className="text-disabled small-16">SubTotal:</p>
                   <p className="small-16">N{total}</p>
               </div>
               <div className="flex w-80 justify-content-space-between">
                   <p className="text-disabled small-16">Shipping Fee:</p>
                   <p className="small-16">N{shipping}</p>
               </div>
               <div className="flex w-80 justify-content-space-between" style={{margin:"1em 0"}}>
                   <p className="small-24 fw-bold">Total:</p>
                   <p className="small-24 fw-bold text-theme">N{total + shipping}</p>
               </div>
               <div className="flex w-100 justify-content-space-between">
                 <Link href={"/books"}>
                 <a className="btn text-theme">Continue To Shopping</a>
                 </Link>
                 <Link href={"/user/checkout"}>
                    <a className="btn bg-theme bub-text-white">Proceed To Checkout</a>
                 </Link>
               </div>
           </div>
         </div>
      <br />
      <br />
      <br />
         </>)
        :(
            <div className="text-center min-vh-50">
                <h3 className="font-a small-24">Your Shopping Cart is Empty</h3>
            </div>
        )}

        <div className="w-90 w-md-100">
         {/* <BooksSection heading={"Your Wishlist"} books={books.recommended}/> */}
         </div>
        </div>
        <NewsLetter/>
        </HomeLayout>
    )
}