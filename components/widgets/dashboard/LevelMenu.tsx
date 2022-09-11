const levels =[
    100,200,300,400,500,600
]

export default function LevelMenu(){
    function openDropDown(id){
        const dropdown = document.querySelector(`#dropdown-level-${id}`) as HTMLElement
        if(dropdown.style.maxHeight){
            dropdown.style.maxHeight = null
        }else{
            dropdown.style.maxHeight = '50vh'
        }
    }
    return(
        <div className="bub__dashboard-level-menu" id="level-menu">
         {levels.map(level=>(
            <div className="bub__dashboard-level-dropdown" key={level}>
             <div className="bub__dashboard-level" onClick={()=>{openDropDown(level)}}>
               <p>Level {level}</p>
             </div>
             <ul className="bub__dashboard-level-dropdown-menu" id={`dropdown-level-${level}`}>
                 <li>1st semester</li>
                 <li>2nd semester</li>
             </ul>
            </div>
         ))}
        </div>
    )
}