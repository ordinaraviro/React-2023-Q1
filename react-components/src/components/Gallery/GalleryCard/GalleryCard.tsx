import React from 'react';

import { Photo } from 'api/api';

interface CardProps {
  photo: Photo;
}

const GalleryCard: React.FC<CardProps> = ({ photo }) => {
  return (
    <>
      <div className="card" key={photo.id}>
        <img
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`}
          alt={photo.title}
        />
        <div className="card-body">
          <h5 className="card-title">{photo.title}</h5>
          <p className="card-text">
            <small className="text-muted">by {photo.ownername}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Views: {photo.views}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
