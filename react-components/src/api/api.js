const apiKey = "9a1e3efb17626c41c96f0d55637ab401";
async function fetchData(searchText, perPage) {
    const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&per_page=${perPage}&extras=views,description&format=json&nojsoncallback=1`);
    const data = await response.json();
    return data;
}
export { fetchData };
