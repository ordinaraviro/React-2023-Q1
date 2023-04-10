export interface Photo {
  id: string;
  owner: string;
  ownername: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  views: string;
  url_o: string;
  url_l: string;
  url_m: string;
  description: {
    _content: string;
  };
}

interface PhotosResponse {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Photo[];
  };
}

const apiKey = '9a1e3efb17626c41c96f0d55637ab401';

async function fetchData(searchText: string, perPage: number): Promise<PhotosResponse> {
  const response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&per_page=${perPage}&extras=views,description,date_upload,date_taken,owner_name,last_update,geo,url_o&format=json&nojsoncallback=1`
  );
  const data = await response.json();
  return data;
}

export { fetchData, PhotosResponse };
