import { useState } from "react";
import HomeLayout from "~/components/layout/home/HomeLayout";
import CheckoutDetails from "~/components/widgets/user/checkout/CheckoutDetails";
import MakePayments from "~/components/widgets/user/checkout/MakePayments";
import BookOrder from "~/components/widgets/user/checkout/BookOrder";
import NewsLetter from "~/components/widgets/home/NewsLetter";

export default function Checkout(){
  
    return(
        <HomeLayout title={"Checkout"}>
         <div className="container checkout-page">
             <br/>
             <h1 className="small-24 font-a text-accent-1">Check Out</h1>
             <div className="flex justify-content-space-between flex-wrap" style={{padding:"1em 0"}}>
                 <div className="checkout-details-container w-55 w-md-85 w-sm-95 m-md-auto">
                  <CheckoutDetails/> 
                 </div>
                 <div className="order-summmary-container w-40 w-md-85 w-sm-95 m-md-auto">
                    <div className="support-chat card w-100 min-vh-20 br" style={{padding:"1em 1.5em"}}>
                     <h1 className="small-24">Need Help ?</h1>
                     <p className="small-16" style={{margin:"0.5em 0"}}>Chat Our Support</p>
                     <button className="btn card text-theme w-60 fw-bold">LIVE CHAT</button>
                    </div><br />
                    <div className="order-summary card br"
                     style={{padding:"1em 1.5em"}}
                    >
                      <h1 className="text-accent-1 small-24">Order Summary</h1><br />
                      <hr /><br />
                      <div className="all-orders">
                       <BookOrder/>
                      </div><br />
                      <hr /><br />
                      <div className="flex justify-content-space-between align-items-center"
                          style={{margin:'1em 0'}}
                      >
                        <p className="small-24 fw-bold">Total</p>
                        <p className="small-24 fw-bold text-theme">N15,000.00</p>
                      </div>
                    </div>
                 </div>
             </div>
            <MakePayments/>

         </div>
        <NewsLetter/>
        </HomeLayout>
    )
}