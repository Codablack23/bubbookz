import { FC } from "react";
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout";

export default function PasswordForm():JSX.Element{
    return(
       <form action="" className="bub-grid">
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">New Password</label>
            <div className="input-group">
                <input type="password w-90" />
                <p className="side right-actions w-10">
                <i className="bi bi-eye small-16"></i>
                </p>
            </div>
        </div>
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Confirm Password</label>
            <div className="input-group">
                <input type="password w-90" />
                <p className="side right-actions w-10">
                <i className="bi bi-eye small-16"></i>
            </p>
            </div>
           
        </div>
        <div className="grid-col-12">
        <button className="btn-small w-100 bg-accent-1 text-white">Save Changes</button>
        </div>
       </form>
    )
}