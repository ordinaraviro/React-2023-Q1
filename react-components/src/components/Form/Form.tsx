import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ConfirmationModal from './ConfirmationModal';
import './Form.scss';

interface FormData {
  name: string;
  date: string;
  option: string;
  checkboxes: boolean[];
  switcher: string;
  file: FileList | null;
  fileUrl?: string;
}

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = (formData: FormData) => {
    if (formData.file && formData.file.length > 0) {
      const imageUrl = URL.createObjectURL(formData.file[0]);
      formData.fileUrl = imageUrl;
    }
    onSubmit(formData);
    reset();
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(submitHandler)}>
        <label>
          Title:
          <input type="text" {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Date:
          <input type="date" {...register('date', { required: true })} />
          {errors.date && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Category:
          <select {...register('option', { required: true })}>
            <option value="">--Select--</option>
            <option value="People">People</option>
            <option value="Nature">Nature</option>
            <option value="City">City</option>
          </select>
          {errors.option && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Tags:
          <br />
          <input type="checkbox" {...register('checkboxes')} value="Wallpaper " />
          <label>Wallpaper</label>
          <br />
          <input type="checkbox" {...register('checkboxes')} value="Beautiful " />
          <label>Beautiful</label>
          <br />
          <input type="checkbox" {...register('checkboxes')} value="Art " />
          <label>Art</label>
          {errors.checkboxes && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Access:
          <input type="radio" {...register('switcher', { required: true })} value="On" /> Private
          <input type="radio" {...register('switcher', { required: true })} value="Off" /> Public
          {errors.switcher && <span>This field is required</span>}
        </label>
        <br />
        <label>
          Image:
          <input type="file" {...register('file', { required: true })} />
          {errors.file && <span>This field is required</span>}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <ConfirmationModal show={showConfirmation} onClose={handleConfirmationClose} />
    </div>
  );
};

export default Form;
