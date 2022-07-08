import DashboardLayout from "~/components/layout/dashboard/DashboardLayout"


function OnlineBook(){
    return(
        <div className="grid-col-6 grid-col-sm-12 bub__online-book">
        <div className="bub__book-cover">
            <img src="/images/book3.svg" alt="" />
        </div>
        <div className="bub__book-desc w-65 w-md-90 m-md-auto">
            <p className="text-white small-17 fw-bold">Principles of Biochemistry</p>
            <p className="text-disabled small-14"
            style={{marginBottom:"0.5em"}}
            >by Mariana P. Diego and Sebastain L. Mateo</p>
            <p className="text-white small-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. ...
            </p>
            <button className="btn-small bg-theme text-white w-85">Go to Book</button>
             <p className="text-disabled text-center w-85 m-md-auto">
                 <span>
                     <i className="bi bi-trash text-disabled"></i>
                 </span>
                 <span>Remove</span>
             </p>
        </div>
      </div>
  
    )
}
export default function OnlineBooksPage(){
    return(
        <DashboardLayout activePage={"online-books"}>
          <div className="bub__dashboard-online-books-page">
              <div className="bub__search-container">
                  <span className="bi bi-search"></span>
                  <input type="text" placeholder="Search Books Online" />
              </div>
              <div className="bub-grid bub-grid-center bub__online-books-overflow">
                <OnlineBook/>
              </div>
          </div>
        </DashboardLayout>
    )
}