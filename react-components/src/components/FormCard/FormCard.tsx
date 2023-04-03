import React, { useState, useEffect } from 'react';
import { FormData } from '../FormContainer/FormContainer';

interface CardProps {
  formData: FormData;
}

const FormCard: React.FC<CardProps> = ({ formData }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (formData.file) {
      const url = URL.createObjectURL(formData.file);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [formData.file]);

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <p>Title: {formData.text}</p>
      <p>Date: {formData.date}</p>
      <p>Category: {formData.dropdown}</p>
      <p>
        Subscribes:
        {formData.checkboxOptions.map((option) => (
          <span key={option.value}>
            {formData.selectedCheckboxOptions.includes(option.value) ? option.label : null}
          </span>
        ))}
      </p>
      <p>Access: {formData.switcher ? 'Private' : 'Public'}</p>
      {imageUrl && (
        <img src={imageUrl} alt="uploaded file" style={{ maxWidth: '200px', maxHeight: '200px' }} />
      )}
    </div>
  );
};

export default FormCard;
