import React from 'react';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, reset } = useForm<FormData>();

  const submitHandler = (formData: FormData) => {
    if (formData.file && formData.file.length > 0) {
      const imageUrl = URL.createObjectURL(formData.file[0]);
      formData.fileUrl = imageUrl;
    }
    onSubmit(formData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <label>
        Title:
        <input type="text" {...register('name')} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" {...register('date')} />
      </label>
      <br />
      <label>
        Category:
        <select {...register('option')}>
          <option value="">--Select--</option>
          <option value="Option 1">People</option>
          <option value="Option 2">Nature</option>
          <option value="Option 3">City</option>
        </select>
      </label>
      <br />
      <label>
        Checkboxes:
        <br />
        <input type="checkbox" {...register('checkboxes.0')} />
        <label>Checkbox 1</label>
        <br />
        <input type="checkbox" {...register('checkboxes.1')} />
        <label>Checkbox 2</label>
        <br />
        <input type="checkbox" {...register('checkboxes.2')} />
        <label>Checkbox 3</label>
      </label>
      <br />
      <label>
        Access:
        <input type="radio" {...register('switcher')} value="On" /> Private
        <input type="radio" {...register('switcher')} value="Off" /> Public
      </label>
      <br />
      <label>
        Image:
        <input type="file" {...register('file')} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
