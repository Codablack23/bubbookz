import OrderLayout from "~/components/layout/dashboard/OrderLayout";
import Link from 'next/link'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";
import User from "~/helpers/User";
import { message, Spin } from "antd";
import NotFound from "~/components/widgets/NotFound";


const Orders =({order})=>{
    const orderItems = order.items?JSON.parse(order.items):[]
    console.log(orderItems)
    return(
        (
            <div className="bub__dashboard-order card br">
            <header className="flex justify-content-space-between align-items-center">
               <p className="fw-bold">Items in your Order</p>
               <Link scroll={false} href={`/dashboard/orders/${order.order_id}`}>
               <a className="fw-bold small-18 text-theme">SEE DETAILS</a>
               </Link>
            </header><br />
            <div className="bub-grid">
                 <ul className="bub__order-list grid-col-10 grid-col-md-12">
                     {orderItems.map(item=>(
                        <li key={item.book_id}>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{item.title}</span>
                    </li>
                     ))}
                 </ul>
                 <div className="grid-col-2 grid-col-md-6">
                   <button className="btn bg-accent-1 text-white w-100 w-md-50 bub-case-capital">{order.status}</button>
                </div>
            </div><br />
           <p className="text-disabled small-16 small-sm-14 bub__order-date">
           Orded placed on {new Date(order.createdAt).toDateString()}</p>
        </div>
        )
    )
}
export default function OrdersPage(){
    const [orders,setOrders] = useState([])
    const [loading,setLoading] = useState(true)

    async function getOrders(){
        const response = await User.getOrders()
        setLoading(false)
        if(response.status == "success"){
            if(response.orders.length > 0){
                setOrders(response.orders)
            }
        }else{
            message.error(response.error)
        }
        
    }
    useEffect(()=>{
      getOrders()
    },[])
    return(
        <OrderLayout>
         {loading ?
          <div className="flex justify-content-center">
           <Spin/>
         </div>
         : (
            orders.length > 0 ?
            orders.map(order=>(
             <Orders key={order.order_id} order={order}/>
            ))
            
            :<NotFound title={"List of Order"}/>
         )}
        </OrderLayout>
    )
}