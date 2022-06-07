import { useState } from "react";
import HomeLayout from "~/components/layout/home/HomeLayout";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import BooksSection from "~/components/widgets/home/booksSection";
import {books} from '~/data/books'


const CartItem =({units,price})=>{
    let TotalPrice = parseInt(units) * parseInt(price)
    const [total,setTotal] =useState(TotalPrice)
    const [quantity,setQuantity] = useState(parseInt(units))

    const increaseQuantity = (increment)=>{
        if(quantity > 0){
          setQuantity(prev=>prev + increment)
          setTotal(quantity * parseInt(price))
        }
        if(quantity == 0){
            setQuantity(1)
        }
    }


    
   return(
        <tr className="cart-item">
            <td>
                <div className="cover">
                <img src="/images/book3.svg" alt="" />
                </div>
            </td>
            <td>
                <p className="small-16">Principles Of General Principles</p>
                <p className="small-14 text-disabled">By Some Author</p><br />
                <div className="flex justify-content-center">
                    <button className="wishlist-btn card">
                        <i className="bi bi-heart text-theme"></i>
                    </button>
                    <button className="delete-btn">
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </td>
            <td>
                <p className="small-14">Hard Copy</p>
            </td>
            <td>
                <p className="small-14">{price}</p>
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
            <p className="small-16 text-theme fw-bold">{parseInt(price) * quantity}</p>
            </td>
        </tr>
   )
}
export default function Cart(){
    return(
        <HomeLayout title={"Cart"}>
        <div className="container bg-light-grey">
        <br /><br />
        <h1 className="font-a fw-reg text-accent-1 small-24">Shopping Cart(2)</h1>
        <br /><br />
        <div className="table-container">
        <table className="cart-table bg-white card br w-100">
              <tr className="table-head">
                  <th></th>
                  <th>Your Book</th>
                  <th>Model</th>
                  <th>Unit Price(N)</th>
                  <th>Quantity</th>
                  <th>Sub Total(N)</th>
              </tr>
              <CartItem units={1} price={3000}/>
              <CartItem units={1} price={1500}/>
          </table>
        </div><br /><br />
           <div className="w-50 w-md-80 w-sm-90" style={{marginLeft:"auto"}}>
             <p className="text-disabled small-16">Shipping fee and coupon code will be added at checkout</p><br /><br/>
             <div className="order-total flex flex-column align-items-center bg-white card br text-center"
              style={{padding:"0.8em"}}>
                 <div className="flex w-80 justify-content-space-between">
                     <p className="text-disabled small-16">SubTotal:</p>
                     <p className="small-16">N13,000</p>
                 </div>
                 <div className="flex w-80 justify-content-space-between">
                     <p className="text-disabled small-16">Shipping Fee:</p>
                     <p className="small-16">N0</p>
                 </div>
                 <div className="flex w-80 justify-content-space-between" style={{margin:"1em 0"}}>
                     <p className="small-24 fw-bold">Total:</p>
                     <p className="small-24 fw-bold text-theme">N13,000</p>
                 </div>
                 <div className="flex w-100 justify-content-space-between">
                   <button className="btn text-theme">Continue To Shopping</button>
                   <button className="btn bg-theme">Proceed To Checkout</button>
                 </div>
             </div>
           </div>
        <br />
        <br />
        <br />

        <div className="w-90 w-md-100">
         <BooksSection heading={"Your Wishlist"} books={books.recommended}/>
         </div>
        </div>
        <NewsLetter/>
        </HomeLayout>
    )
}