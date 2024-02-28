import { useState } from "react";
import "../styles/Searchbar.css"

function SearchBar(props) {
    const {setSearchInput} = props

    const [value, setValue] = useState("")

    function handleClick(e) {
        e.preventDefault();
        console.log("submit form, value = "+value);
        setSearchInput(value);
    }

    return (<form className="searchbar">
        <input className="input" placeholder="Search..." onChange={(e) => setValue(e.target.value)}/>
        <button className="button" type="submit" onClick={(e) => handleClick(e)}>Search</button>
    </form>)
    
}

export default SearchBar