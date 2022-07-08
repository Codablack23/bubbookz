import DashboardSettingsLayout from "~/components/layout/dashboard/SettingsLayout";
import {useRouter} from 'next/router'

export default function SettingsHomePage(){
    const Router = useRouter()
    return(
        <DashboardSettingsLayout page={"address-book"}>
                  <div className="container-small">
              <h1 className="bub-text-accent small-24">
                <i className="bi bi-arrow-left small-24 bub-mr-1 pointer"
                onClick={Router.back}
                ></i>
               Edit Address
              </h1><br />
              <form action="">
                <label htmlFor="" className="input-label small-18 fw-bold">Address</label>
                <div className="input-group">
                    <input className="w-95 m-auto" name="" id="" />
                </div><br />
                <label htmlFor="" className="input-label small-18 fw-bold">State</label>
                <div className="input-group">
                    <select className="w-95 m-auto" name="" id=""
                    >
                     <option value="#">Rivers</option>
                    </select>
                </div><br />
                <label htmlFor="" className="input-label small-18 fw-bold">City</label>
                <div className="input-group">
                    <select className="w-95 m-auto" name="" id=""
                    >
                      <option value="#">Port Harcourt</option>
                    </select>
                </div><br />
                
                <div className="flex align-items-center bub-mt-2 bub-mb-2">
                    <input type="checkbox" className="bub-mr-1" name="" id="" />
                    <label htmlFor="">Set as Default Address</label>
                </div>
                <br />
               <div className="text-center">
               <button className="btn bg-theme w-100 m-auto">Save Changes</button>
               </div>
              </form>
            </div>
        </DashboardSettingsLayout>
    )
}