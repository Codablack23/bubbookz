import {categories} from '~/data/categories'
import Link from "next/link";
import { useRouter } from 'next/router';

export default function BookCategoryMenu(){
    const Router = useRouter()
   console.log(Router)
    return(
        <div className="card bg-white bub__books-category curved w-100 min-vh-80" style={{padding:'1.2em'}}>
        <h1>Book Categories</h1><br/>
         {
           categories.map(cat=>(
             <Link key={cat.text} href={`/books?category=${cat.text.toLowerCase()}`} scroll={false}>
               <a 
               className={`book-category 
               ${(
                 cat.text.toLowerCase() === Router.query.category ||
                 cat.text.toLowerCase() === "all" && !Router.query.category) && 
                 "active"
              }`} 
               >
                {cat.text}
              </a>
             </Link>
           ))
         }
      </div>
    )
}