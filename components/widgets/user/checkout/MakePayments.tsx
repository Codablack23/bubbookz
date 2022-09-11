export default function MakePayments(){
    return(
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
              <p className="fw-bold">N15,000.00</p>
            </div>
            <div className="flex justify-content-space-between align-items-center"
                style={{margin:'0.5em 0'}}
            >
              <p className="small-16 text-disabled">Delivery</p>
              <p className="fw-bold">N0.00</p>
            </div>
            <div className="flex justify-content-space-between align-items-center"
                style={{margin:'1em 0'}}
            >
              <p className="small-24 fw-bold">Total</p>
              <p className="small-24 fw-bold text-theme">N15,000.00</p>
            </div>
            <button className="btn w-100 bg-theme">Create Order</button>
        </div>
    )
}