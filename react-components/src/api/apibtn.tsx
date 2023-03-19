import React from 'react';

const apiKey = '9a1e3efb17626c41c96f0d55637ab401';
const searchText = 'a';
const perPage = 10;

class MyComponent extends React.Component {
  handleClick = async () => {
    try {
      const response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchText}&per_page=${perPage}&extras=views,description&format=json&nojsoncallback=1`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Log response to console</button>
      </div>
    );
  }
}

export default MyComponent;
