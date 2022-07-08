import EventTicket from "~/components/widgets/dashboard/EventTicket";

export default function EventCheckoutStatus():JSX.Element{
    return(
     <div className="container">
        <p className="fw-reg font-a text-center bub-mt-3 bub-mb-3 small-22">
        <i className="bi bi-check-circle-fill bub-mr-1 bub-text-green small-"></i>
         Registration Successful
        </p>
       <EventTicket>

      </EventTicket>
     </div>
    )
}