export default function SearchBar(){
  return (
    <div className="search--container card d-sm-block">
    <div className=" search-box vh-sm-10 w-60 w-md-40">
       <span>
          <i className="bi bi-search"></i>
      </span>
      <input type="text" placeholder='Search For Event' className="search--events-input" />
    </div>
    <div className="event-location-picker flex justify-content-space-between">
       <p>Location</p>
       <span>
           <i className="bi bi-chevron-down"></i>
       </span>
    </div>
    <div className="event-type-picker flex justify-content-space-between">
      <p>Event Type</p>
       <span>
           <i className="bi bi-chevron-down"></i>
       </span>
    </div>
  </div>
  )
}