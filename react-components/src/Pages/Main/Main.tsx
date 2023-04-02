import React, { useState } from 'react';

import Gallery from '../../components/Gallery/Gallery';
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState<string>(localStorage.getItem('searchTerm') || 'hoverla');

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  }

  return (
    <div>
    <SearchBar onSearch={handleSearch} />
    <Gallery searchText={searchTerm} perPage={10} />
  </div>
  );
}

export default Main;
