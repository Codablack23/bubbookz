import Link from "next/link"

export default function EventTicket({ticket}):JSX.Element{
    return(
        <div>
        <div className="container m-auto min-vh-80 bub-bg-light-grey br"
        style={{maxWidth:"799px"}}
        >
          <p className="small-16 bub-text-black text-center">
            Thanks for registering for the {ticket.location.toLowerCase() === "online" && "online"} event {ticket.event_name?ticket.event_name:ticket.name}. Here’s your Ticket.</p><br />
          <div className="bub-grid">
            <div className="grid-col-6 grid-col-sm-12">
               <div className="w-75 w-sm-95">
                 <div>
                  <p className="text-disabled input-label">Time</p>
                  <p className="bub-text-black fw-bold">{new Date(ticket.event_date).toDateString()}at 2:00 am - 3:00 am GMT+1</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled">Location</p>
                  <p className="bub-text-black fw-bold">{ticket.location}</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled">Phone Number</p>
                  <p className="bub-text-black fw-bold">+{ticket.contact_number}</p>
                </div>
               </div>
            </div>

            <div className="grid-col-6 grid-col-sm-12">
             <div className="w-75 w-sm-95">
                 <div>
                  <p className="text-disabled input-label">Transaction</p>
                  <p className="bub-text-black fw-bold">purchased on {new Date(ticket.createdAt).toDateString()}</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled fw-bold small-16 bub-mb-1">Order Summary(N)</p>
                  <p className="text-disabled small-14">Amount Fees: {(ticket.total - ticket.discount).toFixed(2)}</p>
                  <p className="text-disabled small-14">Discount:{parseFloat(ticket.discount).toFixed(2)}</p>
                  <p className="text-disabled small-14">Total: {parseFloat(ticket.total).toFixed(2)}</p>
                 </div>
                 <div className="bub-mt-3">
                  <p className="text-disabled input-label">Email</p>
                  <p className="bub-text-black fw-bold">{ticket.email}</p>
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
                <p className="small-30 fw-bold">{ticket.passcode}</p>
                <p className="bub-mt-2">Issued to</p>
                <p>{ticket.name}</p>
                <p>{ticket.location.toLowerCase() === "online" && "Online"} event on {ticket.event_name?ticket.event_name:ticket.name}</p>
              </div>
            </div>
          </div>
          <div className="grid-col-12">
            <p className="bub-text-dark">Kindly check your email inbox to find more instructions related to this event or ticket.</p><br />
            <div className="flex justify-content-space-between">
            <div className="w-45 w-md-95">
             <p className="bub-text-grey w-75 w-sm-95">Zoom Link</p>
             <Link href={ticket.location_link}>
             <a className="text-theme">{ticket.location_link}</a>
             </Link>
          </div>
          <div className="w-45 w-md-95">
            <p className="bub-text-grey ">Password</p>
             <Link href={"/"}>
             <a className="bub-text-dark fw-bold">{}</a>
             </Link>
          </div>
            </div>
          </div>
          <div className="grid-col-12">
  
          </div>
          </div>
        </div>
       
      </div>
    )
}