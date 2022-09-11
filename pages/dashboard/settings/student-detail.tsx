import DashboardSettingsLayout from "../../../components/layout/dashboard/SettingsLayout";

export default function SettingsHomePage(){
    return(
        <DashboardSettingsLayout page={"student-details"}>
            <div className="container-small">
              <h1 className="bub-text-accent small-24">Student Details</h1><br />
              <form action="">
                <label htmlFor="" className="input-label small-18 fw-bold">School</label>
                <div className="input-group">
                    <select className="w-95 m-auto" name="" id=""
                    >
                     <option value="#">University of Port Harcout</option>
                    </select>
                </div><br />
                <label htmlFor="" className="input-label small-18 fw-bold">Faculty</label>
                <div className="input-group">
                    <select className="w-95 m-auto" name="" id=""
                    >
                     <option value="#">Faculty of Science</option>
                    </select>
                </div><br />
                <label htmlFor="" className="input-label small-18 fw-bold">Department</label>
                <div className="input-group">
                    <select className="w-95 m-auto" name="" id=""
                    >
                      <option value="#">Biochemistry</option>
                    </select>
                </div><br /><br />
               <div className="text-center">
               <button className="btn bg-theme w-100 m-auto">Save Changes</button>
               </div>
              </form>
            </div>
        </DashboardSettingsLayout>
    )
}