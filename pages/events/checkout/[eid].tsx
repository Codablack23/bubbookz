export default function Checkout(){
    return(
        <div className="container w-md-90 min-vh-100  w-80 m-auto" style={{marginTop:"3em"}}>
            <p 
            className="text-center text-accent-1 w-100 font-a small-24 fw-reg"
            style={{textAlign:"center"}}>
                ORDER SUMMARY
            </p><br /><br />
            <div className="details container bg-accent-1 text-white"
            style={{borderRadius:"7px",paddingTop:"1.5em",paddingBottom:"1.5em"}}>
                <h1>Roland James</h1>
                <p>rowlandjones@gmail.com</p><br />
                <p >Online event on Explore the metaverse world</p>
                <p style={{marginTop:"10px"}}>Saturday April 29, 2022 at 2:00 pm - 3:00 pm GMT+1</p>                 
            </div><br /><br /><br />

            <div>
                <label className="promo d-block">Promo Code</label>
                <div className="">
                    <input type="text" className="promo-input w-40"
                    style={{
                        padding:"0.4em ",
                        outline:"none",
                        borderRadius:"7px",
                        border:" 0.5px solid #222222"
                        }} />
                    <button className="bg-accent-1 btn-small text-white w-20"
                    style={{marginLeft:"10px"}}
                    >Apply</button>
                </div><br />
                <h1 className='small-24'>Total: <span className="text-theme small-24">N500000</span></h1>
            </div><br /><br />
        <div className="text-center">
            <button className="btn bg-theme w-60 text-white">Make Payment</button>
        </div>
        </div>
    )
}
   
