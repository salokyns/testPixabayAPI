import { useEffect, useState } from "react";
import Pictures from "./Pictures";
import SearchBar from "./SearchBar";
import apiCall from "../script/APICall";


function App() {

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput!=="") {
      document.title = "search for "+searchInput
    }
  }, [searchInput])

  return (<div>
    <SearchBar setSearchInput={setSearchInput}/>
    <Pictures searchInput={searchInput}/>
  </div>)
}

export default App;
