import React from 'react';
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

class FormContainer extends React.Component<FormContainerProps, FormContainerState> {
  textRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  dropdownRef = React.createRef<HTMLSelectElement>();
  checkboxRefs = new Map<string, React.RefObject<HTMLInputElement>>();
  switcherRef = React.createRef<HTMLInputElement>();
  fileRef = React.createRef<HTMLInputElement>();

  constructor(props: FormContainerProps) {
    super(props);

    this.state = {
      errors: {},
    };

    this.checkboxRefs.set('news', React.createRef<HTMLInputElement>());
    this.checkboxRefs.set('special offers', React.createRef<HTMLInputElement>());
    this.checkboxRefs.set('update notifications', React.createRef<HTMLInputElement>());
  }

  validate = (): boolean => {
    const errors: {
      [key in keyof FormData]?: string;
    } = {};
    const { textRef, dateRef, dropdownRef, checkboxRefs, fileRef } = this;

    if (!textRef.current?.value) {
      errors['text'] = 'Image title is required';
    }

    if (!dateRef.current?.value) {
      errors['date'] = 'Image date is required';
    }

    if (!dropdownRef.current?.value) {
      errors['dropdown'] = 'Category is required';
    }

    const selectedCheckboxOptions = Array.from(checkboxRefs.values())
      .filter((ref) => ref.current?.checked)
      .map((ref) => ref.current?.value)
      .filter(Boolean);

    if (selectedCheckboxOptions.length === 0) {
      errors['selectedCheckboxOptions'] = 'At least one subscription option is required';
    }

    if (!fileRef.current?.files?.[0]) {
      errors['file'] = 'Image upload is required';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    if (this.validate()) {
      const formData: FormData = {
        text: this.textRef.current?.value || '',
        date: this.dateRef.current?.value || '',
        dropdown: this.dropdownRef.current?.value || '',
        checkboxOptions: [
          { value: 'news', label: 'News' },
          { value: 'special offers', label: 'Special offers' },
          { value: 'update notifications', label: 'Update notifications' },
        ],
        selectedCheckboxOptions: Array.from(this.checkboxRefs.values())
          .filter((ref) => ref.current?.checked)
          .map((ref) => ref.current?.value)
          .filter(Boolean),
          switcher: !!this.switcherRef.current?.checked,
          file: this.fileRef.current?.files?.[0],
        };
      
        onSubmit(formData);
      }
    };

    render() {
    const { errors } = this.state;
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="text-input">Image title:</label>
          <input type="text" id="text-input" ref={this.textRef} />
          {errors.text && <div className="error">{errors.text}</div>}
        </div>
    
        <div className="form-group">
          <label htmlFor="date-input">Image date:</label>
          <input type="date" id="date-input" ref={this.dateRef} />
          {errors.date && <div className="error">{errors.date}</div>}
        </div>
    
        <div className="form-group">
          <label htmlFor="dropdown-select">Category:</label>
          <select id="dropdown-select" ref={this.dropdownRef}>
            <option value="">Select a category</option>
            <option value="nature">Nature</option>
            <option value="city">City</option>
            <option value="food">Food</option>
          </select>
          {errors.dropdown && <div className="error">{errors.dropdown}</div>}
        </div>
    
        <div className="form-group">
          <label>Subscription options:</label>
          {[
            { value: 'news', label: 'News' },
            { value: 'special offers', label: 'Special offers' },
            { value: 'update notifications', label: 'Update notifications' },
          ].map((option) => (
            <div key={option.value} className="checkbox-group">
              <input
                type="checkbox"
                id={option.value}
                value={option.value}
                ref={this.checkboxRefs.get(option.value)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
          {errors.selectedCheckboxOptions && (
            <div className="error">{errors.selectedCheckboxOptions}</div>
          )}
        </div>
    
        <div className="form-group">
          <label htmlFor="switcher-input">Enable sharing:</label>
          <input type="checkbox" id="switcher-input" ref={this.switcherRef} />
        </div>
    
        <div className="form-group">
          <label htmlFor="file-input">Image upload:</label>
          <input type="file" id="file-input" ref={this.fileRef} />
          {errors.file && <div className="error">{errors.file}</div>}
        </div>
    
        <button type="submit">Submit</button>
      </form>
    );
    }
    }

export default FormContainer;
