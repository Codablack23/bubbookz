import NewsLetter from "~/components/widgets/home/NewsLetter";
import HomeLayout from "../home/HomeLayout";
import BookCategoryMenu from "~/components/widgets/books/BookCategoryMenu";
import BookPriceSlider from "~/components/widgets/books/BookPriceSlider";

export default function BooksLayout({children,category}){
    return(
        <HomeLayout title={"Books"}>
        <div className="Books-hero min-vh-40">
           <h1 className="font-a fw-reg">
              Books
           </h1>
         </div>
         <div className="container books-container">
             <div className="flex heading align-items-center">
                 <h1 className="text-disabled small-14">Books</h1>
                 <p><i className="bi bi-chevron-right small-14 text-disabled"></i></p>
                 <h1 className="small-14">All Categories</h1>
                {category !== ""?
                <>
                 <p><i className="bi bi-chevron-right small-14 text-disabled"></i></p>
                 <h1 className="small-14">{category}</h1>
                </>
                :null}
             </div><br />
             <div className="flex flex-wrap w-100 justify-content-space-between">
                <div className="w-25">
                  <div className="book-category-menu">
                  <BookCategoryMenu/><br />
                  <BookPriceSlider/>
                  </div>
                </div>
                <div className="w-70">
                  {children}
                </div>
             </div>
         </div>
        <NewsLetter/>
        </HomeLayout>
    )
}