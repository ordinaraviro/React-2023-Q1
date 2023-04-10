import React, { useEffect } from 'react';

interface ConfirmationModalProps {
  show: boolean;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        onClose();
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="confirmation-modal">
      <div className="confirmation-modal__content">
        <p>Thank you for your submission!</p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
