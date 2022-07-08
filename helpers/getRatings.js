export function getRatings(end){
    const starsFilled = new Array(Math.trunc(end)).fill("").map((el,i)=>
        <span key={i}>
        <i className={`bi bi-star-fill text-star`}></i>
        </span>
    )
    const starsEmpty = new Array((5-end)).fill("").map((el,i)=>
    <span key={i}>
    <i className={`bi bi-star text-star`}></i>
    </span>
    )
    const ratings = [...starsFilled,starsEmpty]

    return (
      <div className="flex">
        {ratings.map((star,i)=>(
         star
        ))}
      </div>
    )
}

export function Ratings({end}){
  const starsFilled = new Array(Math.trunc(end)).fill("").map((el,i)=>
      <span key={i}>
      <i className={`bi bi-star-fill text-star`}></i>
      </span>
  )
  const starsEmpty = new Array((5-end)).fill("").map((el,i)=>
  <span key={i}>
  <i className={`bi bi-star text-star`}></i>
  </span>
  )
  const ratings = [...starsFilled,starsEmpty]

  return (
    <div className="flex">
      {ratings.map((star,i)=>(
       star
      ))}
    </div>
  )
}

