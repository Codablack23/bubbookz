import BookCategoryMenu from "~/components/widgets/books/BookCategoryMenu";
import BookPriceSlider from "~/components/widgets/books/BookPriceSlider";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import HomeLayout from "../home/HomeLayout";




function toggleCategories(){
  const bookCategories = document.querySelector("#book-category-mobile") as HTMLDivElement;
  if(bookCategories.style.bottom.toString() === "-100%"){
    bookCategories.style.bottom = "0%"
  }
  else{
    bookCategories.style.bottom="-100%"
  }
}
export default function BooksLayout({children,category,range}){
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
                {category || category !== "all"?
                <div className="flex align-items-center">
                 <p><i className="bi bi-chevron-right small-14 text-disabled"></i></p>
                 <h1 className="small-14 bub-case-capital">{category}</h1>
                </div>
                :<div className="flex align-items-center">
                <p><i className="bi bi-chevron-right small-14 text-disabled"></i></p>
                <h1 className="small-14">All Categories</h1>
                </div>}
             </div><br />
             <div className="w-100 bub-grid">
                  <div className="grid-col-3 grid-col-md-12">
                    <div className="book-category-menu-mobile" id="book-category-mobile">
                     <div className="category-container">
                     <BookCategoryMenu/><br /> 
                     <BookPriceSlider rangeObj = {range}/>
                     </div>
                    </div>
                    <div className="book-category-menu">
                     <BookCategoryMenu/><br /> 
                     <BookPriceSlider rangeObj = {range}/>
                     </div>
                 
                  </div>
               <div className="w-100 grid-col-9 grid-col-md-12">
                  {children}
                </div>
             </div>
          <div className="book__category-bottombar card bg-accent-1">
           
            <div className="tabs flex align-items-center" onClick={toggleCategories}>
              <i className="bi bi-grid text-theme bub-mr-2"></i>
              <p className="text-theme">Categories</p>
            </div>
            
            <div className="tabs flex align-items-center">
              <i className="bi bi-cart text-theme"></i>
            </div>
            <div className="tabs flex align-items-center">
              <i className="bi bi-heart text-theme"></i>
            </div>
          </div>
         </div>
        <NewsLetter/>
        </HomeLayout>
    )
}