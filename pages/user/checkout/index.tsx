
import HomeLayout from "~/components/layout/home/HomeLayout";
import CheckoutDetails from "~/components/widgets/user/checkout/CheckoutDetails";
import BookOrder from "~/components/widgets/user/checkout/BookOrder";
import NewsLetter from "~/components/widgets/home/NewsLetter";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";
import { message, Modal, Spin } from "antd";
import { CartContext } from "~/context/cart/CartContext";
import User from "~/helpers/User";

export default function Checkout(){
    
    const [user,setUser] = useState<any>({})
    const {state} = useContext(AuthContext)

    const cartContext = useContext(CartContext)
    const [total,setTotal] = useState(0)
    const [cart,setCart] = useState([])
    const [deliveryFee,setDeliveryFee] = useState(0)
    const [isLogged,setIsLogged] = useState(false)
    const [paymentMethod,setPaymentMethod] = useState(null)
    const [deliveryMethod,setDeliveryMethod] = useState(null)
    const [addressDetails,setAddressDetails] = useState(null)
    const [pickUpLocation,setPickUpLocation] = useState(null)
    const [isLoading,setisLoading] = useState(false)
    


    async function handleSubmit(e){
       e.preventDefault()
       if(paymentMethod === null || deliveryMethod === null){
            message.warning("Please select a payment method and a delivery method to proceed")
       }else{
         if(deliveryMethod == "door-delivery" && (addressDetails === null)){
            message.warning("Please add delivery address")
         }else if(deliveryMethod == "pickup" && (pickUpLocation === null || pickUpLocation === "")) {
            message.warning("please add pick up location")
         }else{
             setisLoading(true)
             const response = await User.createOrder({
                phone_number:user.phone_no,
                shipping_method:deliveryMethod,
                shipping_location:(deliveryMethod === "pickup"?
                pickUpLocation
                :deliveryMethod === "door-delivery" && `${addressDetails.address} ${addressDetails.city} ${addressDetails.state}`),
                payment_method:paymentMethod,
                delivery_fee:deliveryFee,
                payment_status:"unpaid",
                payment_price:total + deliveryFee,
                items:JSON.stringify(cart)
             })
             setisLoading(false)
             if(response.status === "success"){
                cartContext.dispatch({type:"CLEAR_CART",data:{
                    book_id:"",
                    quantity:"",
                    book:[]
                }})
                window.location.assign(`/user/checkout/order/success?order=${response.order}`)
             }else{
                message.error(response.error)
             }
             console.log(response)
         }
       }

    }
    useEffect(()=>{
        if(state){
            setIsLogged(state.isLoggedIn)
            if(!state.isLoggedIn){
                message.error("Please Login to Continue Checkout")
                setTimeout(()=>{
                    window.location.assign(`/user/login?redirect=/user/checkout`)
                },4000)      
            }
            else{
                setUser(state.user)
                if(cartContext.cart.length == 0){
                    message.warning("Nothing to check out please add items to cart to continue")
                    setTimeout(()=>{
                        window.location.assign(`/books/`)
                    },5000) 
                }
            }

        }
    },[state,cartContext])

    function useStateHooks(state,setState){
        return [state,setState]
    }
    useEffect(()=>{
        const totalPrice = cartContext.cart.reduce((total,item)=>total+=item.total,0)
        setCart(cartContext.cart)
        setTotal(totalPrice)
        console.log(cartContext.cart)
    },[cartContext.cart])
    return(
        <HomeLayout title={"Checkout"}>
           
         <div className="container checkout-page">
             <br/>
             <h1 className="small-24 font-a text-accent-1">Check Out</h1>
             <div className="flex justify-content-space-between flex-wrap" style={{padding:"1em 0"}}>
                 <div className="checkout-details-container w-55 w-md-85 w-sm-95 m-md-auto">
                  <CheckoutDetails user ={user} actions={
                    [
                        useStateHooks(paymentMethod,setPaymentMethod),
                        useStateHooks(deliveryMethod,setDeliveryMethod),
                        useStateHooks(addressDetails,setAddressDetails),
                        useStateHooks(pickUpLocation,setPickUpLocation),

                   ]}/>
                 </div>
                 <div className="order-summmary-container w-40 w-md-85 w-sm-95 m-md-auto">
                    <div className="support-chat card w-100 min-vh-20 br" style={{padding:"1em 1.5em"}}>
                     <h1 className="small-24">Need Help ?</h1>
                     <p className="small-16" style={{margin:"0.5em 0"}}>Chat Our Support</p>
                     <button className="btn card text-theme w-60 fw-bold">LIVE CHAT</button>
                    </div><br />
                    <div className="order-summary card br"
                     style={{padding:"1em 1.5em"}}
                    >
                      <h1 className="text-accent-1 small-24">Order Summary</h1><br />
                      <hr /><br />
                      <div className="all-orders">
                       {cart.length > 0 && (
                        cart.map(order=>(
                            <BookOrder key={order.book_id} order={order}/>
                        ))
                       )}
                      </div><br />
                      <hr /><br />
                      <div className="flex justify-content-space-between align-items-center"
                          style={{margin:'1em 0'}}
                      >
                        <p className="small-24 fw-bold">Total</p>
                        <p className="small-24 fw-bold text-theme">N{total}</p>
                      </div>
                    </div>
                 </div>
             </div>
            <div className="make-payment card w-40 w-md-70 w-sm-90 m-md-auto bg-white"
            style={{padding:'1.2em'}}
            >
                <h1>Promo code</h1>
                <div className="flex w-100 align-items-center">
                <input type="text" className="input br w-65" />
                <button className="bg-accent-1 text-white btn-small w-30">Apply</button>
                </div>
                <div className="flex justify-content-space-between align-items-center"
                style={{margin:'0.5em 0'}}
                >
                <p className="small-16 text-disabled">Sub Total</p>
                <p className="fw-bold">N{total}</p>
                </div>
                <div className="flex justify-content-space-between align-items-center"
                style={{margin:'0.5em 0'}}
                >
                <p className="small-16 text-disabled">Delivery</p>
                <p className="fw-bold">N{deliveryFee}</p>
                </div>
                <div className="flex justify-content-space-between align-items-center"
                style={{margin:'1em 0'}}
                >
                <p className="small-24 fw-bold">Total</p>
                <p className="small-24 fw-bold text-theme">N{total + deliveryFee}</p>
                </div>
                <button className="btn w-100 bg-theme" onClick={handleSubmit}>Create Order</button>
            </div>

         </div>
        <NewsLetter/>
        <Modal visible={!isLogged} centered footer={false} closable={false} closeIcon={false}>
              <div className="bub-bg-white vh-20 flex align-items-center justify-content-center">
                  <div>
                  <div className="bub-bg-white flex align-items-center justify-content-center">
                  <Spin size="large"/>
                  </div>
                  <p className="bub-text-accent">Loading Checkout</p>
                  </div>
              </div>
        </Modal>
        <Modal visible={isLoading} centered footer={false} closable={false} closeIcon={false}>
              <div className="bub-bg-white vh-20 flex align-items-center justify-content-center">
                  <div>
                  <div className="bub-bg-white flex align-items-center justify-content-center">
                  <Spin size="large"/>
                  </div>
                  <p className="bub-text-accent">Creating Your Order</p>
                  </div>
              </div>
        </Modal>
        </HomeLayout>
    )
}