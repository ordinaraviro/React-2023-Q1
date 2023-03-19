import React from "react";
import { fetchFlickrData, FlickrPhotosResponse } from "../../api/api";
import "./Gallery.scss";

interface Props {
  searchText: string;
  perPage: number;
}

interface State {
  data: FlickrPhotosResponse | null;
}

class Gallery extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        data: null,
      };
      this.fetchData = this.fetchData.bind(this);
    }
  
    async componentDidMount() {
      this.fetchData();
    }
  
    async componentDidUpdate(prevProps: Props) {
      if (prevProps.searchText !== this.props.searchText) {
        this.fetchData();
      }
    }
  
    async fetchData() {
      const { searchText, perPage } = this.props;
      const data = await fetchFlickrData(searchText, perPage);
      this.setState({ data });
    }
  
    render() {
      const { data } = this.state;
  
      if (!data) {
        return <div>Loading...</div>;
      }
  
      const photos = data.photos.photo;
  
      return (
        <div className="gallery">
          {photos.map((photo) => (
            <div className="card" key={photo.id}>
              <img
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`}
                alt={photo.title}
              />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
                <p className="card-text">
                  <small className="text-muted">Views: {photo.views}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
  

export default Gallery;
