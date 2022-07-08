import Image from "next/image";
import HomeLayout from "~/components/layout/home/HomeLayout";

export default function OrderSuccess():JSX.Element{
    return(
     <HomeLayout title={"Order success"}>
        <div className="container bub-mt-4 text-center">
           <p className="font-a text-center bub-mb-4">
            <i className="bi bi-check-circle-fill bub-text-green bub-mr-1"></i>
            <span className="font-a fw-reg">Order Successful !!!</span>
           </p>
           <div className="w-40 w-md-80 w-sm-100 m-auto">
            <Image
            src={"/images/order_success.svg"}
            width={"100%"}
            height={"100%"}
            layout="responsive"
            alt={"Order success"}
            />
             <button className="btn bg-theme w-100">Continue Shopping</button>

             <button className="btn bg-white text-theme w-100">Track My Order</button>
           </div>
          
        </div>
     </HomeLayout>
    )
}