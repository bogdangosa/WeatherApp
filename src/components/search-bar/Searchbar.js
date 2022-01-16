import react from "react";
import './Searchbar.css';

const Searchbar = (props) =>{
    const setSearchText = props.setSearchText;
    const onSearch = props.onSearch;

    return(
        <div className={"Searchbar "+props.className}>
            <input className="search-input" placeholder="Enter a City" value={props.SearchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <div className="Search-Btn" onClick={()=>onSearch()}><p>Search</p></div>
        </div>
    )
}

export default Searchbar;