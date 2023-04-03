import React, { useEffect, useState } from 'react';

import GalleryCard from './GalleryCard/GalleryCard';
import { fetchData, PhotosResponse } from '../../api/api';

import './Gallery.scss';

interface Props {
  searchText: string;
  perPage: number;
}

const Gallery: React.FC<Props> = ({ searchText, perPage }) => {
  const [data, setData] = useState<PhotosResponse | null>(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData(searchText, perPage);
      setData(result);
    };

    fetchDataAsync();
  }, [searchText, perPage]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const photos = data.photos.photo;

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <GalleryCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default Gallery;
