import React from 'react';
import MyComponent from '../api/apibtn';
import Gallery from '../components/Gallery/Gallery';

function Main() {
    return (
        <div>
            Main
            <MyComponent/>
            <Gallery searchText='a' perPage={10}/>
        </div>
    )
}

export default Main;
