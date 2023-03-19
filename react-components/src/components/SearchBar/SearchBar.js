import React, { Component } from "react";
import "./SearchBar.scss";
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: localStorage.getItem("searchTerm") || "",
        };
    }
    componentDidMount() {
        const savedSearchTerm = localStorage.getItem("searchTerm");
        if (savedSearchTerm) {
            this.setState({ searchTerm: savedSearchTerm });
        }
    }
    componentWillUnmount() {
        localStorage.setItem("searchTerm", this.state.searchTerm);
    }
    handleSearch = () => {
        this.props.onSearch(this.state.searchTerm);
    };
    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };
    render() {
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", value: this.state.searchTerm, onChange: this.handleChange }),
            React.createElement("button", { onClick: this.handleSearch }, "Search")));
    }
}
export default SearchBar;
