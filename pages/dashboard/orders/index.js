import OrderLayout from "~/components/layout/dashboard/OrderLayout";
import Link from 'next/link'

const Orders =()=>(
    <div className="bub__dashboard-order card br">
    <header className="flex justify-content-space-between align-items-center">
       <p className="fw-bold">Items in your Order</p>
       <Link scroll={false} href={"/dashboard/orders/1"}>
       <a className="fw-bold small-18 text-theme">SEE DETAILS</a>
       </Link>
    </header><br />
    <div className="bub-grid">
         <ul className="bub__order-list grid-col-10 grid-col-md-12">
             <li>
                 <i className="bi bi-check-circle-fill"></i>
                 <span>Principles of Biochemistry by Mariana P. Diego and Sebastain L. Mateo</span>
             </li>
             <li>
             <i className="bi bi-check-circle-fill"></i>  
             <span> Dont make me think by Steve Krug</span>
             </li>
             <li>
             <i className="bi bi-check-circle-fill"></i>   
             <span>The Design of Everyday things by Donald A. Norman</span>
             </li>
             <li>
             <i className="bi bi-check-circle-fill"></i>  
                 <span> How to play chess by Richard Blauman</span>
             </li>
         </ul>
         <div className="grid-col-2 grid-col-md-6">
           <button className="btn bg-accent-1 text-white w-100 w-md-50">Pending</button>
        </div>
    </div><br />
   <p className="text-disabled small-16 small-sm-14 bub__order-date">
   Orded placed on 08/11/2021</p>
</div>
)
export default function OrdersPage(){
    return(
        <OrderLayout>
         <Orders/>
        </OrderLayout>
    )
}