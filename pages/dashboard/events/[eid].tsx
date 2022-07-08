
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";
import EventTicket from "~/components/widgets/dashboard/EventTicket";

export default function EventDetailPage():JSX.Element{
    return(
      <div>
        <DashboardLayout activePage={"events"}>
        <p className="fw-bold"><span className="text-disabled">Events</span>{" > "} <span>Explore the metaverse</span> </p>
         <br /><br />
        <EventTicket>
        
        </EventTicket>
        </DashboardLayout>
      </div>
    )
}