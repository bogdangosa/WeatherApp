import react from "react";
import './Searchbar.css';

const Searchbar = (props) =>{
    const setSearchText = props.setSearchText;
    const onSearch = props.onSearch;

    return(
        <div className={"Searchbar "+props.className}>
            <input className="search-input" placeholder="Enter a City" value={props.SearchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <p className="Search-Btn" onClick={()=>onSearch()}>Search</p>
        </div>
    )
}

export default Searchbar;