import BookResult from "~/components/elements/BookResult";
import HomeLayout from "~/components/layout/home/HomeLayout";

export default function Wishlist():JSX.Element{
    return(
        <HomeLayout title={"Book Search Results"}>
        <div className="container bub-mt-2">
        <header className="text-center bub-mb-4 bub-mt-md-2">
           <p className="small-26 font-a fw-reg text-accent-1">Your Wishlist</p>
         </header>
         <div className="bub-grid">
           <div className="grid-col-3 grid-col-md-6">
               <BookResult isOnWishList={true}/>
           </div>
           <div className="grid-col-3 grid-col-md-6">
               <BookResult isOnWishList={true}/>
           </div>
           <div className="grid-col-3 grid-col-md-6">
               <BookResult isOnWishList={true}/>
           </div>
           <div className="grid-col-3 grid-col-md-6">
               <BookResult isOnWishList={true}/>
           </div>
         </div>
        </div><br />
       </HomeLayout>
    )
}