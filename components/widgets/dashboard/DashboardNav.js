import Link from "next/link";

export default function DashboardNav({activePage}){
    return(
        <header className="bub-dashboard-nav">
            <Link href={"/dashboard/"}>
              <a className={`bub-dashboard-link ${activePage === "level"?"active":""}`} >Level</a>
            </Link>
            <Link href={"/dashboard/"}>
              <a  className={`bub-dashboard-link ${activePage === "online-books"?"active":""}`}>
                Online Books
              </a>
            </Link>
            <Link href={"/dashboard/"}>
              <a  className={`bub-dashboard-link ${activePage === "orders"?"active":""}`}>
                Orders
              </a>
            </Link>
            <Link href={"/dashboard/"}>
              <a className={`bub-dashboard-link ${activePage === "events"?"active":""}`}>
                Events
              </a>
            </Link>
            <Link href={"/dashboard/"}>
              <a  className={`bub-dashboard-link ${activePage === "community"?"active":""}`}>
                Community
              </a>
            </Link>
        </header>
    )
}