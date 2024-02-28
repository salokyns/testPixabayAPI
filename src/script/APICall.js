// Define your API key
const apiKey = '42543567-ff017a88b8f8ccdaf95ea7786';

let imageUrls =[];

async function apiCall(searchInput) {
    // Make the API call
    
    // Define your search query
    let query = searchInput;
    console.log("make api call on search : "+query);
    // Define the endpoint URL
    let endpoint = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}`;
    console.log(endpoint);
    if (searchInput!="") {
        const fetchData = async () => {
            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                const imageUrls = data.hits.map(hit => hit.webformatURL);
                console.log(imageUrls);
                return imageUrls;
            }
            catch (error) {
                console.error("Error while fetching data", error);
            }
        };

        return fetchData()
    }
}

export default apiCall;
