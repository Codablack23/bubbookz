import styled from 'styled-components'

    const Button = styled('h1')`
    background:${({backgroundColor})=>backgroundColor};
    border:none;
    border-radius:${({borderRadius})=>borderRadius};
    height:${({height})=>height};
    width:${({width})=>width};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    `


export default function SearchHeaderMobile(){
    return(
        <form className="search--form-mobile">
        <div className="search--bar">
            <span className="search--icon--container">
            <img src="/icons/search.svg" alt="" />
            </span>
            <input 
            type="text"
            className="search--input" 
            placeholder='Search by Keyword, Author, Title, ISBN'
            />
            <select className="search--category-container">
                <option value="">All Categories</option>
            </select>
        </div>
        <Button backgroundColor={"#1DCEFD"} borderRadius="7px" height="50px" width="5em">
         <span>
             <img src="/icons/search-white.svg" alt="" />
         </span>
        </Button>
    </form>
    )
}