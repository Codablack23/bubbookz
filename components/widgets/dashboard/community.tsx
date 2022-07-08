import Image from "next/image";

export default function Community({isActive}):JSX.Element{
    return(
        <div className="bub__dashboard-community w-100 min-vh-30 bub-grid card br">
           <div className="grid-col-3 grid-col-sm-12 vh-min-md-20">
              <Image  src={"/images/community/c1.svg"} layout="responsive" width={"100%"} height={"100%"} alt="cover"/>
           </div>
           <div className="grid-col-9 grid-col-sm-12 bub-pt-2 bub-p-sm-2">
            <header className="flex align-items-center justify-content-space-between">
                <div>
                    <p className="fw-bold">Welcome to Book Review</p>
                    <p className="text-disabled small-14 bub-mb-2">By Jenifer Anderson</p>
                </div>
              {isActive==="created"?
              <button className="btn-small">
                  <i className="bi bi-pencil"></i>
                </button>
               :null}
            </header>
            <div className="text-disabled flex align-items-center">
                <p className="bub-mr-1">
                    <i className="bi bi-people bub-text-dark fw-bold bub-mr-1"></i>
                    <span className="small-14">500 members</span> 
                </p>
                <p className="bub-mr-1">
                    <i className="bi bi-hand-thumbs-up bub-text-dark fw-bold bub-mr-1"></i>
                    <span className="small-14">500 members</span> 
                </p>
                    <p className="bub-mr-1">
                    <i className="bi bi-chat-left-text bub-text-dark fw-bold bub-mr-1"></i>
                    <span className="small-14">500 members</span> 
                </p>
            </div>
            <div className="flex d-md-block justify-content-space-between bub-mt-2 bub-pr-1">
              <p className="w-50 w-md-85 w-sm-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est suspendisse sollicitudin hac sed a. Cursus leo commodo enim nulla ut. Sapien pharetra, quis non facilisi...
              </p>
            {isActive==="created"?
                <div className="flex align-items-center">
                <p className="bub-mr-1">Status:</p>
                <button className="btn-small bub-bg-primary">Pending</button>
              </div>
            :null}
            </div>
           </div>
        </div>
    )
}