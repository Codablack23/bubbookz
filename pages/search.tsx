import BookResult from "~/components/elements/BookResult";
import HomeLayout from "~/components/layout/home/HomeLayout";

export default function SearchResult():JSX.Element{
    return(
        <HomeLayout title={"Book Search Results"}>
         <div className="container bub-mt-2">
         <header className="text-center bub-mb-4 bub-mt-md-2">
            <p>1 result for <span className="text-theme">How to play chess</span> <i className="text-disabled">clear filters </i></p>
          </header>
          <div className="bub-grid">
            <div className="grid-col-3 grid-col-md-6">
                <BookResult isOnWishList={false}/>
            </div>
            <div className="grid-col-3 grid-col-md-6">
                <BookResult isOnWishList={false}/>
            </div>
            <div className="grid-col-3 grid-col-md-6">
                <BookResult isOnWishList={false}/>
            </div>
            <div className="grid-col-3 grid-col-md-6">
                <BookResult isOnWishList={false}/>
            </div>
          </div>
         </div><br />
        </HomeLayout>
    )
}