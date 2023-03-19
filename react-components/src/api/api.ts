interface FlickrPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  views: string;
  description: {
    _content: string;
  };
}

interface FlickrPhotosResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: FlickrPhoto[];
  };
}

const apiKey = "9a1e3efb17626c41c96f0d55637ab401";

async function fetchFlickrData(
  searchText: string,
  perPage: number
): Promise<FlickrPhotosResponse> {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&per_page=${perPage}&extras=views,description&format=json&nojsoncallback=1`
  );
  const data = await response.json();
  return data;
}

export { fetchFlickrData, FlickrPhotosResponse };
