import SearchBar from '../components/SearchBar/SearchBar';
import React from 'react';
import Gallery from '../components/Gallery/Gallery';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: localStorage.getItem("searchTerm") || "hoverla",
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(searchTerm) {
        this.setState({ searchTerm });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(SearchBar, { onSearch: this.handleSearch }),
            React.createElement(Gallery, { searchText: this.state.searchTerm, perPage: 10 })));
    }
}
export default Main;
