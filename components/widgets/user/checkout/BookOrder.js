import { Image } from "antd";

export default function BookOrder({order}){
    return(
        <div className="book-order min-vh-30 flex flex-wrap align-items-flex-start">
        <div className="cover w-30 vh-25 w-sm-90 m-sm-auto">
          <Image src={order.book_img} alt="" className="img-fluid br vh-25" />
        </div>
        <div className="w-55 w-sm-90 m-sm-auto"
        style={{margin:'0.8em 0 0.8em 0.5em'}}
        >
          <p className="small-16">{order.title}</p>
          <p className="text-disabled small-14">By {order.author}</p>
          <div className="flex align-items-center justify-content-space-between">
           <p className="small-14">Quantity: {order.quantity}</p>
           <p className="small-14">Price:N{order.price}</p>
         </div>
        </div>

      </div>
    )
}