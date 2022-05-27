import {categories} from '~/data/categories'
import Link from "next/link";

export default function BookCategoryMenu(){
    return(
        <div className="card bg-white curved w-100 min-vh-80" style={{padding:'1.2em'}}>
        <h1>Book Categories</h1><br/>
         {
           categories.map(cat=>(
             <Link key={cat.text} href={cat.url}>
               <a className="book-category">{cat.text}</a>
             </Link>
           ))
         }
      </div>
    )
}