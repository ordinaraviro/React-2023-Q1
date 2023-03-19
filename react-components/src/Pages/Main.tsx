import SearchBar from '../components/SearchBar/SearchBar';
import React from 'react';
import MyComponent from '../api/apibtn';
import Gallery from '../components/Gallery/Gallery';

interface MainState {
  searchTerm: string;
}

class Main extends React.Component<{}, MainState> {
  constructor(props: MainState) {
    super(props);
    this.state = {
      searchTerm: "hoverla",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(searchTerm: string) {
    this.setState({ searchTerm });
  }

  render() {
    return (
      <div>
        Main
        <MyComponent />
        <SearchBar onSearch={this.handleSearch} />
        <Gallery searchText={this.state.searchTerm} perPage={10} />
      </div>
    );
  }
}

export default Main;
