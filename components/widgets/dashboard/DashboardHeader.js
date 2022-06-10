export default function DashboardHeader(){
    return(
        <header className="bub-dashboard-header">
           <div className="bub-dashboard-banner bg-accent-1">
               <h1 className="font-a fw-reg text-center text-white small-26 small-sm-16 small-md-22">
                  Welcome to Your Dashboard
                </h1>
           </div>
           <div className="bub-account-info bg-white container-small card br w-85 w-md-95">
             <div className="bub-account-cover-container text-center">
               <div className="bub-account-cover">
                   <img src="/images/dashboard-profile.svg" alt="" />
               </div>
               <p className="small-26 fw-bold">Roland James</p>
               <p className="text-disabled">rowlandjones@gmail.com</p>
             </div><br />
             <div className="flex justify-content-space-between w-100">
                 <p className="text-disabled">Account Type : Student</p>
                 <p>
                   <i className="bi bi-pencil text-disabled small-16 fw-bold"></i>
                 </p>
             </div><br />
             <div className="flex justify-content-space-between d-md-block w-100">
                <div style={{
                  marginBottom:"15px"
                }}>
                  <p className="text-disabled small-14">School</p>
                  <p className="small-16">University Of Port Harcourt</p>
                </div>
                <div style={{
                  marginBottom:"15px"
                }}>
                  <p className="text-disabled small-14">Faculty</p>
                  <p className="small-16">Faculty of Sciences</p>
                </div>
                <div style={{
                  marginBottom:"15px"
                }}>
                  <p className="text-disabled small-14">Department</p>
                  <p className="small-16">Biochemsistry</p>
                </div>
             </div>
           </div>
        </header>
    )
}