import { createContext, useEffect, useState } from "react"

interface Book{
    [key:string]:any
}
export const WishListContext = createContext<any>([])

export default function WishListProvider({children}){
    const [wishList,setWishList] = useState<Book[]>([])


    function addToWishList(book:Book){
      setWishList(prev=>[...prev,book])
    }
    function removefromWishList(id:string | number){
        setWishList(prev=>prev.filter(item=>item.book_id == id))
    }
    useEffect(()=>{
       localStorage.setItem("WishList",JSON.stringify(wishList))
    },[wishList])

    useEffect(()=>{
        setWishList(JSON.parse(localStorage.getItem("wishlist")))
    },[])
    return(
     <WishListContext.Provider 
     value={{
        wishList,
        wishListActions:{
          addToWishList,
          removefromWishList
        }
     }}
     >
     {children}
     </WishListContext.Provider>
    )
}