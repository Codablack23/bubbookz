import OrderLayout from "~/components/layout/dashboard/OrderLayout";
import {useRouter} from 'next/router'
import { useState } from "react";

export default function OrderDetailsPage(){
    const router = useRouter()
    const [isGrid,setIsGrid] = useState(true)
    return(
        <OrderLayout>
          <div className="bub__order-details-page">
          <header className="bub__order-header">
           <p>
           <i className="bi bi-arrow-left small-20"
           style={{
               cursor:"pointer"
           }}
           onClick={router.back}
           ></i>
            <span className="fw-bold"
            style={{
                marginLeft:"10px"
            }}
            >Order Details</span>
           </p><br />
           <p className="small-16 text-disabled flex align-items-center">
                <p className="small-16">Order Status:</p>
               <p 
               style={{
                   padding:"0.5em 1em",
                   marginLeft:"10px"
               }}
               className="bg-accent-1 text-white small-16 br">Pending</p>
           </p>
          </header>
          <div className="bub-grid bub__order-info">
            <div className="grid-col-4 grid-col-md-12 card br bg-white bub__order-activity">
                <p className="text-disabled container-small fw-bold">Activity</p>
                <hr />
                <div className="container-small">
                 <ul className="bub__timeline-order-list">
                     <li>
                        <i className="icon bi bi-check-circle-fill text-theme"></i>
                        <div>
                            <p className="small-16">Order Placed</p>
                            <p className="text-theme small-14">18/11/21</p>
                        </div>
                     </li>
                     <li>
                        <i className="icon bi bi-circle text-theme"></i>
                        <div>
                            <p className="small-16">Order in progress</p>
                            <p className="text-theme small-14">18/11/21</p>
                        </div>
                     </li>
                     <li>
                        <i className="icon bi bi-circle text-theme"></i>
                        <div>
                            <p className="small-16">Out for delivery</p>
                            <p className="text-theme small-14">18/11/21</p>
                        </div>
                     </li>
                     <li>
                        <i className="icon bi bi-circle text-theme"></i>
                        <div>
                            <p className="small-16">Delivered</p>
                            <p className="text-theme small-14">18/11/21</p>
                        </div>
                     </li>
                 </ul>
                </div>
                <hr />
                <p className="container-small bub-text-red text-center pointer">
                    Cancel Order
                </p>
            </div>
            <div className="grid-col-4 grid-col-md-12 card br bg-white bub__order-delivery">
                <p className="text-disabled container-small fw-bold">Delivery Information</p>
                <hr />
                <div className="container-small">
                    <div>
                        <p className="fw-bold bub-text-grey small-14 bub-pb-1">Shipping Method</p>
                        <p className="small-16 fw-bold">Pick Up delivery</p>
                    </div><br /><br />
                    <div>
                        <p className="fw-bold bub-text-grey small-14  bub-pb-1">Shipping Location</p>
                        <p className="small-16 fw-bold">Choba Junction</p>
                    </div>
                </div>
            </div>
            <div className="grid-col-4 grid-col-md-12 card br bg-white bub__order-payments">
                <p className="text-disabled container-small fw-bold">Payment Details</p>
                <hr />
                <div className="container-small bub-mb-2">
                  <div className="flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="small-16">Sub Total</p>
                      <p className="fw-bold">N30000</p>
                  </div>
                  <div className="flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="small-16">Delivery</p>
                      <p className="fw-bold">N5000</p>
                  </div>
                  <div className="flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="small-16">Discount</p>
                      <p className="fw-bold">N0</p>
                  </div>
                </div>
                <hr className="mb-1"/>
                <div className="container-small flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="fw-bold">Total</p>
                      <p className="fw-bold">N35000</p>
                 </div>
                 <p className="bub-bottom container-small">
                       <span className="small-16 text-disabled">Payment Method</span>
                       <span className="bub-ml-1 small-16">Cash</span>
                 </p>
            </div>

          </div>

           <div className="bub__order-items bub-mt-3">
            <header className="flex justify-content-space-between align-items-center">
                <p className="fw-bold">Items in your Order</p>
                <div>
                    <button className="btn-small card bub-mr-2"
                    onClick={()=>setIsGrid(false)}
                    style={{borderRadius:"0",marginRight:"10px"}}>
                        <i className={`bi bi-list-ul ${!isGrid?"text-theme":""}`}></i>
                    </button>
                    <button className="btn-small bub-ml-2"
                     onClick={()=>setIsGrid(true)}
                    style={{borderRadius:"0"}}>
                        <i className={`bi bi-grid-fill ${isGrid?"text-theme":""}`}></i>
                    </button>
                </div>
            </header>
            <div className="bub-grid">
                <div 
                className={
                    `bub-bg-accent 
                     bub__book-order 
                     curved 
                     bub-p-2
                     ${isGrid?"grid-col-6":"grid-col-12"}`
                }
                >
                  <div className="w-25 w-md-100 cover">
                      <img src="/images/book3.svg" alt="" className="img-fluid curved" />
                  </div>
                  <div className="w-70 w-md-100">
                      <p className="small-16 text-white">Principles of Biochemistry</p>
                      <p className="text-disabled small-14">by Mariana P. Diego and Sebastain L. Mateo</p>
                      <div  className="bub-mt-2">
                        <p className="text-white small-14">Unit Price : N5000</p>
                        <p className="text-white small-14">Quantity : 2</p>
                        <p className="text-white small-14">Total : <b>10,000</b></p>
                      </div>
                      <button className="btn-small bub-bg-primary w-60 w-md-80">Rate and Review</button>
                  </div>
                </div>
            </div>
           </div>


          </div>
        </OrderLayout>
    )
}