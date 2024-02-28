import { useEffect, useState } from "react";
import apiCall from "../script/APICall";
import "../styles/image.css"

function Pictures(props) {
    
    const [imageUrls, setImageURLs] = useState([])

    const {searchInput} = props

    useEffect( () => {
        const urls = apiCall(searchInput).then(urls => {
            console.log("urls are : "+urls)
            setImageURLs(urls)
        })
      }, [searchInput])

    return <div>
        <ul className="ulImage">
            {imageUrls?.map((url, index) => 
                <li className="liImage" key={"image-"+index}><img className="image" src={url}/></li>
            )}
            
        </ul>
    </div>
}

export default Pictures