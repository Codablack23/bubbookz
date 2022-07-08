import Link from "next/link"

export default function EventTicket({children}):JSX.Element{
    return(
        <div>
        <div className="container m-auto min-vh-80 bub-bg-light-grey br"
        style={{maxWidth:"799px"}}
        >
          <p className="small-16 bub-text-black text-center">Thanks for registering for the online event explore the metaverse world. Here’s your Ticket.</p><br />
          <div className="bub-grid">
            <div className="grid-col-6 grid-col-sm-12">
               <div className="w-75 w-sm-95">
                 <div>
                  <p className="text-disabled input-label">Time</p>
                  <p className="bub-text-black fw-bold">29-04-2022 at 2:00 am - 3:00 am GMT+1</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled">Location</p>
                  <p className="bub-text-black fw-bold">Online</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled">Phone Number</p>
                  <p className="bub-text-black fw-bold">+234 811237 2379</p>
                </div>
               </div>
            </div>

            <div className="grid-col-6 grid-col-sm-12">
             <div className="w-75 w-sm-95">
                 <div>
                  <p className="text-disabled input-label">Transaction</p>
                  <p className="bub-text-black fw-bold">purchased on 15- 03 - 2022, 23:15:17 UTC</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled fw-bold small-16 bub-mb-1">Order Summary(N)</p>
                  <p className="text-disabled small-14">Amount Fees: 5000.00</p>
                  <p className="text-disabled small-14">Discount: 0.00</p>
                  <p className="text-disabled small-14">Total: 5000.00</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled input-label">Email</p>
                  <p className="bub-text-black fw-bold">rowlandjones@gmail.com</p>
                 </div>
               </div>
            </div>
          
          <div className="grid-col-12">
            <div className="bub-mt-3 flex 
            align-items-center container-small 
            bub-bg-accent min-vh-30 w-100 
            d-md-block br bub__event-code">
              <div className="w-20 w-md-70">
              <i className="bi bi-qr-code text-white"
              style={{fontSize:"100px"}}
              ></i>
              </div>
              <div className="text-white w-60 w-md-90">
                <p className="small-30 fw-bold">3456798</p>
                <p className="bub-mt-2">Issued to</p>
                <p>Rowland James</p>
                <p>Online event on Explore the metaverse world</p>
              </div>
            </div>
          </div>
          <div className="grid-col-12">
            <p className="bub-text-dark">Kindly check your email inbox to find more instructions related to this event or ticket.</p><br />
            <div className="flex justify-content-space-between">
            <div className="w-45 w-md-95">
             <p className="bub-text-grey w-75 w-sm-95">Zoom Link</p>
             <Link href={"/"}>
             <a className="text-theme">www.zoomLink.com</a>
             </Link>
          </div>
          <div className="w-45 w-md-95">
            <p className="bub-text-grey ">Password</p>
             <Link href={"/"}>
             <a className="bub-text-dark fw-bold">12345</a>
             </Link>
          </div>
            </div>
          </div>
          <div className="grid-col-12">
          {children}
          </div>
          </div>
        </div>
       
      </div>
    )
}