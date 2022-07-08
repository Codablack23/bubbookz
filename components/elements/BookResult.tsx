import Image from "next/image";
import {Ratings} from "~/helpers/getRatings"

export default function BookResult({isOnWishList}):JSX.Element{
    return(
        <div className="bub__book-result br card bg-white">
          <header className="cover w-100">
            <Image 
            src={"/images/book3.svg"}
            alt={"book"}
            height="100%"
            width={"100%"}
            layout={"responsive"}
            />
            <p className="wishlist card bg-white">
               {!isOnWishList?(
                 <i className="bi bi-heart text-theme"></i>
               ):<i className="bi bi-heart-fill bub-text-red"></i>}
            </p>
          </header>
          <div className="description bub-p-2">
            <p className="fw-bold small-14">Principles Of General Chemistry</p>
            <p className="text-disabled small-13 bub-mb-1">By: Mariana Diego</p>
            <p className="fw-bold bub-mb-1">N5000</p>
            <div>
               <Ratings end={4}/>
            </div>
          </div>
        </div>
    )
}