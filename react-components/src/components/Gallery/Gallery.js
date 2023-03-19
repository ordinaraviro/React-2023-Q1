import React from "react";
import { fetchData } from "../../api/api";
import "./Gallery.scss";
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
        this.fetchData = this.fetchData.bind(this);
    }
    async componentDidMount() {
        this.fetchData();
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.searchText !== this.props.searchText) {
            this.fetchData();
        }
    }
    async fetchData() {
        const { searchText, perPage } = this.props;
        const data = await fetchData(searchText, perPage);
        this.setState({ data });
    }
    render() {
        const { data } = this.state;
        if (!data) {
            return React.createElement("div", null, "Loading...");
        }
        const photos = data.photos.photo;
        return (React.createElement("div", { className: "gallery" }, photos.map((photo) => (React.createElement("div", { className: "card", key: photo.id },
            React.createElement("img", { src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`, alt: photo.title }),
            React.createElement("div", { className: "card-body" },
                React.createElement("h5", { className: "card-title" }, photo.title),
                React.createElement("p", { className: "card-text" },
                    React.createElement("small", { className: "text-muted" },
                        "by ",
                        photo.owner)),
                React.createElement("p", { className: "card-text" },
                    React.createElement("small", { className: "text-muted" },
                        "Views: ",
                        photo.views))))))));
    }
}
export default Gallery;
