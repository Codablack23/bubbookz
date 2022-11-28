import { createContext, useEffect, useState } from "react"

interface Book{
    [key:string]:any
}
export const WishListContext = createContext<any>([])

export default function WishListProvider({children}){
    const [wishList,setWishList] = useState<Book[]>([])


    function addToWishList(book:Book){
      // console.log(book)
      setWishList(prev=>[...prev,book])
    }
    function removefromWishList(id:string | number){
        setWishList(prev=>prev.filter(item=>item.book_id !== id))
    }
    useEffect(()=>{
       const wishlistStore = JSON.parse(localStorage.getItem("wishlist"))
       setWishList(wishlistStore?wishlistStore:[])
    },[])
    
    useEffect(()=>{
      localStorage.setItem("wishlist",JSON.stringify(wislist?wishlist:[]))
   },[wishList])
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