import { createContext, useEffect, useState } from "react"
import Books from "~/helpers/Books"


interface Book{
    [key:string]:any
}
export const BookContext = createContext<any>([])

export default function BookProvider({children}){
    const [book,setBooks] = useState<Book[]>([])
    async function getBooks(){
        const response = await Books.getBooks()
        if(response.status == "success"){
            setBooks(response.books)
        }
    }
    useEffect(()=>{
      getBooks()
    },[])
    return (
     <BookContext.Provider value={{bookData:book}} >
       {children}
     </BookContext.Provider>
    )
}