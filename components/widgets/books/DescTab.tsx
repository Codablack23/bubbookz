import { useState } from "react"
import {getRatings} from '~/helpers/getRatings'

const stars =[
    {value:5,amount:5},
    {value:4,amount:3},
    {value:3,amount:4},
    {value:2,amount:1},
    {value:1,amount:0},
]
function StarProgress({value,total}){
    let percent = (value/total) * 100
    return(
        <div className="progress-bar">
          <div className="progress bg-star" style={{
              width:`${percent}%`,
              borderTopRightRadius:percent === 100?'7px':"",
              borderBottomRightRadius:percent === 100?'7px':"",
              }}>
          </div>
        </div>
    )
}
export default function Tab(){
    const [active,setActive] = useState("description")
    return(
        <div className="tab-menu">
            <div className="tabs">
                <p className={`tab-item ${active=="description"?"active":""}`} onClick={()=>setActive('description')}>Description</p>
                <p className={`tab-item ${active=="product-details"?"active":""}`}  onClick={()=>setActive('product-details')}>Product Details</p>
                <p className={`tab-item ${active=="reviews"?"active":""}`}  onClick={()=>setActive('reviews')}>Reviews</p>
            </div>
            <hr />
            <div className="tab-content">
              {active==="description" &&(
                   <div className="book-description w-100 text-accent">
                    <p className="small-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam dictum integer.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam dictum integer.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi. Ut phasellus habitant fermentum quam morbi duis habitant. Rhoncus mi venenatis, proin lacus facilisi non scelerisque. Amet ac sem sit sed quam dictum integer.
                    </p>
                  </div>
              )}
              {active === 'product-details' && (
                <div className="book-product-details">
                  <p>ISBN-10: 0525657746</p>
                  <p>GTIN-13: 9780525657743</p>
                  <p>Publisher: 9ja Prints</p>
                  <p>Copyright: 2021</p>
                  <p>Book Binding: Hardcover</p>
                  <p>Pages: 456</p>
                  <p>Weight: 0.93lb</p>
                  <p>Dimensions(in) (L x W x H): 8.2 x 5.8 x 1.3</p>
               </div>
              )}
             {active === "reviews" && (
                <div className="book-reviews flex flex-wrap">
                    <div className="book-rating-overview bg-white w-35 w-md-65 w-sm-85 min-vh-40 br">
                       <header className="text-center">
                          <p className="text-accent fw-bold" style={{marginBottom:'10px'}}>Product Rating</p>
                          <p className="small-30 text-accent fw-bold">4.5/5</p>
                           <div className="flex align-items-center justify-content-center">
                           {getRatings(4)}
                           <p className="small-16"> (13)</p>
                           </div>
                       </header><br />
                       <div className="w-85 m-auto">
                        {stars.map(star=>(
                            <div key={star.value}
                             className="flex align-items-center justify-content-space-between"
                             style={{margin:"0.8em 0"}}
                             >
                               <div   className="w-25 flex align-items-center justify-content-space-between">
                                <span className="fw-bold">{star.value}</span>
                                <span><i className="bi bi-star-fill text-star"></i></span>
                                <span>({star.amount})</span>
                                </div>
                               <div className="w-70">
                                   <StarProgress value={star.amount} total={13}/>
                               </div>
                            </div>
                        )
                        )}
                       </div>
                    </div>
                    <div className="book-review-list w-60 w-md-95">
                        <div className="book-review">
                         {getRatings(4)}
                         <p>The delivery was very fast. I am vey happy with this service.</p>
                         <p className="small-14 text-disabled">03 Dec. 2022 By Kelechi</p>
                        </div>
                        <div className="book-review">
                         {getRatings(4)}
                         <p>The delivery was very fast. I am vey happy with this service.</p>
                         <p className="small-14 text-disabled">03 Dec. 2022 By Kelechi</p>
                        </div>
                    </div>
                 </div>
              )}
            </div>
        </div>
    )
}

export function BookRating(){
    return(
        <div className="book-reviews flex flex-wrap">
        <div className="book-rating-overview bg-white w-35 w-md-65 w-sm-85 min-vh-40 br">
           <header className="text-center">
              <p className="text-accent fw-bold" style={{marginBottom:'10px'}}>Product Rating</p>
              <p className="small-30 text-accent fw-bold">4.5/5</p>
               <div className="flex align-items-center justify-content-center">
               {getRatings(4)}
               <p className="small-16"> (13)</p>
               </div>
           </header><br />
           <div className="w-85 m-auto">
            {stars.map(star=>(
                <div key={star.value}
                 className="flex align-items-center justify-content-space-between"
                 style={{margin:"0.8em 0"}}
                 >
                   <div   className="w-25 flex align-items-center justify-content-space-between">
                    <span className="fw-bold">{star.value}</span>
                    <span><i className="bi bi-star-fill text-star"></i></span>
                    <span>({star.amount})</span>
                    </div>
                   <div className="w-70">
                       <StarProgress value={star.amount} total={13}/>
                   </div>
                </div>
            )
            )}
           </div>
        </div>
        <div className="book-review-list w-60 w-md-95">
            <div className="book-review">
             {getRatings(4)}
             <p>The delivery was very fast. I am vey happy with this service.</p>
             <p className="small-14 text-disabled">03 Dec. 2022 By Kelechi</p>
            </div>
            <div className="book-review">
             {getRatings(4)}
             <p>The delivery was very fast. I am vey happy with this service.</p>
             <p className="small-14 text-disabled">03 Dec. 2022 By Kelechi</p>
            </div>
        </div>
     </div>
    )
}