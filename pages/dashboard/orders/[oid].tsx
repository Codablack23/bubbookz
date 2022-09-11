import OrderLayout from "~/components/layout/dashboard/OrderLayout";
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";
import { Image, Spin } from "antd";
import User from "~/helpers/User";
import NotFound from "~/components/widgets/NotFound";


const OrderItems =({isGrid,item})=>{
    return(
        <div 
        className={
            `bub-bg-accent 
             bub__book-order 
             curved 
             bub-p-2
             bub-case-capital
             ${isGrid?"grid-col-6":"grid-col-12"}`
        }
        >
          <div className="w-25 w-md-100 cover">
              <Image src={item.book_img} alt="" className="img-fluid curved" />
          </div>
          <div className="w-70 w-md-100">
              <p className="small-16 text-white">{item.title}</p>
              <p className="text-disabled small-14">by {item.author}</p>
              <div  className="bub-mt-2">
                <p className="text-white small-14">Unit Price : N{item.price}</p>
                <p className="text-white small-14">Quantity : {item.quantity}</p>
                <p className="text-white small-14">Total : <b>{item.total}</b></p>
              </div>
              <button className="btn-small bub-bg-primary w-60 w-md-80">Rate and Review</button>
          </div>
        </div>
    )
}
interface Order{
    status?:string,
    payment_price?:number | string,
    shipping_method?:string,
    shipping_location?:string,
    items?:string
    delivery_fee?:number | string,
    discount?:string | number, 
    payment_method?:string,
    [key:string]:any
}
export default function OrderDetailsPage(){
    const router = useRouter()
    const [items,setItems] = useState<any>([])
    const [order,setOrder] = useState<Order>({})
    const [isGrid,setIsGrid] = useState(true)
    const [isLoading,setisLoading] = useState(true)
     async function getOrder(){
        if(router.query.oid){
            const id = await router.query.oid as string
            const response = await User.getOrder(id)
            setisLoading(false)
            if(response.status == "success"){
                setOrder(response.order)
                setItems(response.order.items?JSON.parse(response.order.items):[])
            }
            console.log(response)
        }
        
     }
    useEffect(() => {
      getOrder()
    }, [router])
    return(
        <OrderLayout>
          {isLoading?
          <div className="vh-50 w-100 flex align-items-center justify-content-center">
            <div>
                <Spin/>
            </div>
          </div>
          :Object.entries(order).length === 0?
          <div className="vh-50 w-100 flex align-items-center justify-content-center">
          <div>
             <NotFound title={"content for order"}/>
          </div>
        </div>
         
          :
          (
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
               className="bg-accent-1 text-white small-16 br bub-case-capital">{order.status}</p>
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
                            <p className="text-theme small-14">{new Date(order.createdAt).toUTCString()}</p>
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
                        <p className="small-16 fw-bold bub-case-capital">{order.shipping_method}</p>
                    </div><br /><br />
                    <div>
                        <p className="fw-bold bub-text-grey small-14  bub-pb-1">Shipping Location</p>
                        <p className="small-16 fw-bold">{order.shipping_location}</p>
                    </div>
                </div>
            </div>
            <div className="grid-col-4 grid-col-md-12 card br bg-white bub__order-payments">
                <p className="text-disabled container-small fw-bold">Payment Details</p>
                <hr />
                <div className="container-small bub-mb-2">
                  <div className="flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="small-16">Sub Total</p>
                      <p className="fw-bold">N{parseFloat(order.payment_price as string) - (parseFloat(order.delivery_fee as string)+ parseFloat(order.discount as string))}</p>
                  </div>
                  <div className="flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="small-16">Delivery</p>
                      <p className="fw-bold">N{order.delivery_fee}</p>
                  </div>
                  <div className="flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="small-16">Discount</p>
                      <p className="fw-bold">N{order.discount}</p>
                  </div>
                </div>
                <hr className="mb-1"/>
                <div className="container-small flex justify-content-space-between align-items-center bub-mb-1">
                      <p className="fw-bold">Total</p>
                      <p className="fw-bold">N{order.payment_price}</p>
                 </div>
                 <p className="bub-bottom container-small">
                       <span className="small-16 text-disabled">Payment Method</span>
                       <span className="bub-ml-1 small-16">{order.payment_method}</span>
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
              {items.map(item=>(
                <OrderItems key={item.book_id} item={item} isGrid={isGrid}/>
              ))}
            </div>
           </div>


          </div>
          )

          }
        </OrderLayout>
    )
}