import Image from "next/image";

function ToggleAdmin(){
  document.getElementById("active-admins").classList.toggle("active-admins-mobile")
}

export default function SupportChat():JSX.Element{
    return(
      <div className="bub__support-chat">
       <div className="bub-grid">
       <div className="grid-col-4 grid-col-md-12">
         <div className="active-admins active-admins-mobile" id="active-admins">
          <button className="bg-white close btn" onClick={ToggleAdmin}> 
          <i className="bi bi-x-lg"></i>
          </button>
          <div className="input-group card bub-p-1">
            <i className="bi bi-search"></i>
            <input type="text" className="search-box" placeholder="Search for ..." />
          </div>
          <ul className="bub__admin-list">
            <li>
              <p className="small-14 text-disabled text-right">11:30</p>
              <div className="admin-info">
                <div className="admin-profile card">
                <sub className="bub-bg-green"></sub>
                </div>
                <div className="message bub-ml-2">
                  <p className="small-14 fw-bold">Admin 1</p>
                  <p className="small-14 sent">{"Lorem ipsum dolor, sit amet consectetur adipisicing.".slice(0,25)} ...</p>
                </div>
                <p className="badge bg-theme">1</p>
              </div>
            </li>
          </ul>
        </div>
       </div>
      <div className="grid-col-8 grid-col-md-12">
      <div className="chat-area">
      <header>
        <div className="profile">
          <div className="profile-image bg-white bub-ml-md-2 card">
            
            <sub className="bub-bg-green"></sub>
          </div>
          <div className="info bub-ml-2">
            <p>Admin 1</p>
            <p className="small-14 text-disabled">active</p>
          </div>
        </div>
        <div className="actions">
          <p>
            <i className="bi bi-telephone"></i>
          </p>
          <p>
            <i className="bi bi-camera-video"></i>
          </p>
          <p>
            <Image src={"/images/three-dots.svg"} height={"20px"} width={"20px"} alt={"three-dots"}/>
          </p>
          <button className="btn-small open-admins card bg-white text-theme close" onClick={ToggleAdmin}>
                  <i className="bi bi-people-fill"></i>
          </button>
        </div>
      </header>
      <div className="messages container-small">
        <div className="message recieved">
           <div className="small-13 chatbox">
              <p className="small-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus aut quis minima ratione exercitationem autem eum esse hic sit!</p>
           </div>
           <span className="small-12 text-disabled">11:30am</span>
        </div>
        <div className="message sent">
        <div className="small-13 chatbox">
        <p className="small-13">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus aut quis minima ratione exercitationem autem eum esse hic sit!</p> 
        <div className="small-12 flex w-100 align-items-center bub-mt-1 justify-content-flex-end">
          <span className="small-12">Reply by Angelina Brown </span>
          <i className="bi bi-check2-all bub-ml-1 text-theme"></i>
        </div>
        </div>
        <span className="small-12 text-disablec">11:30am</span>
        </div>
       
      </div>
      <div className="message-input">
        <input type="text" placeholder="Type Message" className="w-65 w-md-60" />
        <div className="actions w-30 w-md-45">
          <button type="button" className="btn-small">
            <i className="bi bi-emoji-smile"></i>
          </button>
          <button type="button" className="btn-small">
          <i className="bi bi-paperclip"></i>
          </button>
          <button type="button" className="btn-small bg-theme">
            <i className="bi bi-send bub-ml-1"></i>
          </button>
        </div>
      </div>
      </div>
      </div>
       </div>
      </div>
    )
}