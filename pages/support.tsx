import HomeLayout from "~/components/layout/home/HomeLayout";
import SupportChat from "~/components/widgets/home/supportChat";

export default function Support():JSX.Element{
    return(
    <HomeLayout title={"Support"}>
     <div className="container">
     <header className="text-center">
        <p className="small-30 fw-reg font-a text-accent-1 bub-mb-1">Inbox</p>
        <p className="bub-mb-2">Chat with our admin</p>
      </header>
      <SupportChat/>
     </div>
    </HomeLayout>
    )
}