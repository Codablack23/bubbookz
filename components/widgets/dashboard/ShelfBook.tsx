import {Image} from 'antd'
import Link from 'next/link'

interface Book{
    book:{
      title:string,
      author:string,
      book_img:string,
      book_description:string,
      format:string,
      price:string | number,
      index:number,
      [key:string]:any
    }
}

export default function ShelfBook({book}:Book){
    return(
       <>
        <div className="bub__shelf-book bg-accent-1 w-100 w-md-60 w-sm-95 bub-mb-2">
            <p className="bub__book-index">{book.index + 1}</p>
            <div className="bub__book-cover w-25">
                <Image src={book.book_img} alt="" height={150} width={150} />
            </div>
            <div className="bub__book-desc text-white w-45 w-md-100">
              <p className="small-16 text-white" style={{textTransform:"capitalize"}}>{book.title}</p>
              <p className="small-14 text-disabled bub-case-capital">by {book.author}</p>
              <p className="text-disabled small-16">
                Unit Price :<span className="text-white"> {book.price}</span>
              </p>
              <br />
              <p className="bub__book-text-description">
              {book.book_description.slice(0,100) + "..."}
              </p><br />
              {/* <p>
                <span className="text-disabled small-16">Course Title: </span>
                <span className="small-16">Biology</span>
              </p>
              <p>
                <span className="text-disabled small-16">Course Code: </span>
                <span className="small-16">FSB 101</span>
              </p><br /> */}

              <div className="bub__book-action-mobile w-60">
              <Link href={`/books/${book.book_id}`} passHref>
              <button className="btn-small bg-theme text-white w-40">Buy</button>
              </Link>
            </div>

            </div>
            <div className="bub__book-action w-25">
              <button className="btn-small bg-theme text-white w-70">Buy</button>
            </div>
        </div>
       <br />
       </>
    )
}