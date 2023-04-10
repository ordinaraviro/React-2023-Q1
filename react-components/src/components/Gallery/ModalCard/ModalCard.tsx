import React, { useState } from 'react';
import { Photo } from 'api/api';
import './ModalCard.scss';

interface ModalCardProps {
  photo: Photo;
}

const ModalCard: React.FC<ModalCardProps> = ({ photo }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const modal = (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">{photo.title}</h3>
          <button className="close-button" onClick={toggleModal}>
            X
          </button>
        </div>
        <div className="modal-body">
          <img
            src={
              photo.url_o
                ? photo.url_o
                : `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`
            }
            alt={photo.title}
          />
          <p>{photo.description._content}</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="card" onClick={toggleModal} key={photo.id}>
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
      {showModal && modal}
    </>
  );
};

export default ModalCard;
