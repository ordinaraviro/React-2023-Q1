import React, { useState, useRef, useCallback } from 'react';

import { validate } from './formValidation';

import './FormContainer.scss';

interface CheckboxOption {
  value: string;
  label: string;
}

export interface FormData {
  text: string;
  date: string;
  dropdown: string;
  checkboxOptions: CheckboxOption[];
  selectedCheckboxOptions: string[];
  switcher: boolean;
  file: File | undefined;
}

interface FormContainerProps {
  onSubmit: (formData: FormData) => void;
}

interface FormContainerState extends FormData {
  errors: {
    [key in keyof FormData]?: string;
  };
}

const FormContainer: React.FC<FormContainerProps> = ({ onSubmit }) => {
  const textRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLSelectElement>(null);
  const checkboxRefs = useRef<Map<string, React.RefObject<HTMLInputElement>>>(
    new Map([
      ['news', useRef<HTMLInputElement>(null)],
      ['special offers', useRef<HTMLInputElement>(null)],
      ['update notifications', useRef<HTMLInputElement>(null)],
    ])
  );
  const switcherRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<FormContainerState['errors']>({});

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData: FormData = {
        text: textRef.current?.value || '',
        date: dateRef.current?.value || '',
        dropdown: dropdownRef.current?.value || '',
        checkboxOptions: [
          { value: 'news', label: 'News' },
          { value: 'special offers', label: 'Special offers' },
          { value: 'update notifications', label: 'Update notifications' },
        ],
        selectedCheckboxOptions: Array.from(checkboxRefs.current.values())
          .filter((ref) => ref.current?.checked)
          .map((ref) => ref.current?.value)
          .filter(Boolean),
        switcher: !!switcherRef.current?.checked,
        file: fileRef.current?.files?.[0],
      };

      const errors = validate(formData);
      setErrors(errors);

      if (Object.keys(errors).length === 0) {
        onSubmit(formData);
      }
    },
    [onSubmit]
  );

  return (
    <form className="form-container">
      <div className="form-group">
        <label htmlFor="text-input">Image Title</label>
        <input type="text" id="text-input" ref={textRef} />
        {errors.text && <span className="error">{errors.text}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="date-input">Image Date</label>
        <input type="date" id="date-input" ref={dateRef} />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="dropdown-input">Category</label>
        <select id="dropdown-input" ref={dropdownRef}>
          <option value="">Select a category</option>
          <option value="animals">Animals</option>
          <option value="nature">Nature</option>
          <option value="city">City</option>
        </select>
        {errors.dropdown && <span className="error">{errors.dropdown}</span>}
      </div>

      <div className="form-group">
        <label>Subscription Options</label>
        {[
          { value: 'news', label: 'News' },
          { value: 'special offers', label: 'Special offers' },
          { value: 'update notifications', label: 'Update notifications' },
        ].map((option) => (
          <div key={option.value} className="checkbox-container">
            <input
              type="checkbox"
              id={`checkbox-${option.value}`}
              value={option.value}
              ref={checkboxRefs.current.get(option.value)}
            />
            <label htmlFor={`checkbox-${option.value}`}>{option.label}</label>
          </div>
        ))}
        {errors.selectedCheckboxOptions && (
          <span className="error">{errors.selectedCheckboxOptions}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="switcher-input">Switcher</label>
        <input type="checkbox" id="switcher-input" ref={switcherRef} />
      </div>

      <div className="form-group">
        <label htmlFor="file-input">Image Upload</label>
        <input type="file" id="file-input" ref={fileRef} />
        {errors.file && <span className="error">{errors.file}</span>}
      </div>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default FormContainer;
