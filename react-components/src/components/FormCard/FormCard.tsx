import React from 'react';
import { FormData } from '../FormContainer/FormContainer';

interface CardProps {
  formData: FormData;
}

class FormCard extends React.Component<CardProps> {
  render() {
    const { formData } = this.props;
    const imageUrl = formData.file && URL.createObjectURL(formData.file);
    return (
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
        <p>Text: {formData.text}</p>
        <p>Date: {formData.date}</p>
        <p>Dropdown: {formData.dropdown}</p>
        <p>Checkbox: {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        <p>Switcher: {formData.switcher ? 'Option 1' : 'Option 2'}</p>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="uploaded file"
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        )}
      </div>
    );
  }
}

export default FormCard;
