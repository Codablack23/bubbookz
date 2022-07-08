import DashboardLayout from "~/components/layout/dashboard/DashboardLayout"

export default function OrderLayout({children}){
    return(
        <DashboardLayout activePage={"orders"}>
        <div className="bub__dashboard-orders-page">
        {children}
        </div>
      </DashboardLayout>
    )
}