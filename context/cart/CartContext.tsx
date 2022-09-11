import { createContext, useEffect, useReducer, } from "react"

interface Book{
    [key:string]:any
}
function cartReducer (state:any[],action:{type:string,data?:{[key:string]:any}}){
  const prev = [...state]
  const {book_id} = action.data
  const {book} = action.data
  const {quantity} = action.data

  switch (action.type) {

   case "ADD_TO_CART":
    const bookExist = state.find(prevState=>prevState.book_id == book.book_id)
    if(bookExist){
      return prev.map(prevBook=>{
        if(prevBook.book_id == book.book_id){
          return {
            ...prevBook,
            quantity:prevBook.quantity + 1,
            total:(prevBook.quantity + 1) * book.price
          }
        }
        else{
          return prevBook
        }
      })
    }else{
     return [...state,book]
    }
    

   case "REMOVE_FROM_CART":
     return prev.filter(cartitem=>cartitem.book_id == book_id)

  case "CLEAR_CART":
  return []


   case "UPDATE_QUANTITY":
    return prev.map(book=>{
      if(book.book_id == book_id){
        book.quantity = quantity
        book.total =  parseFloat(quantity as string) * book.price 
      }
      return book
    })

   default:
       return state
  }
}


export const CartContext = createContext<any>([])

export default function CartProvider({children}){
    const [cart,dispatch] = useReducer(cartReducer,[],()=>{
      if(typeof window !== "undefined"){
        const cart:any = window.localStorage.getItem("cart")
        if(cart){
           return JSON.parse(cart)
        }
        else{
           return []
        }
      }
    })

  
    useEffect(()=>{
      if(cart){
        localStorage.setItem("cart",JSON.stringify(cart))
    }
    else{
        localStorage.setItem("cart",JSON.stringify([]))
    }
    },[cart])
    return(
     <CartContext.Provider 
     value={{
        cart,
        dispatch
     }}
     >
     {children}
     </CartContext.Provider>
    )
}