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
  constructor(props: FormContainerProps) {
    super(props);

    this.state = {
      text: '',
      date: '',
      dropdown: '',
      checkboxOptions: [
        { value: 'news', label: 'News' },
        { value: 'special offers', label: 'Special offers' },
        { value: 'update notifications', label: 'Update notifications' },
      ],
      selectedCheckboxOptions: [],
      switcher: false,
      file: undefined,
      errors: {},
    };
  }

  validate = (): boolean => {
    const errors: {
      [key in keyof FormData]?: string;
    } = {};
    const { text, date, dropdown, selectedCheckboxOptions, file } = this.state;

    if (!text) {
      errors['text'] = 'Image title is required';
    }

    if (!date) {
      errors['date'] = 'Image date is required';
    }

    if (!dropdown) {
      errors['dropdown'] = 'Category is required';
    }

    if (selectedCheckboxOptions.length === 0) {
      errors['selectedCheckboxOptions'] = 'At least one subscription option is required';
    }

    if (!file) {
      errors['file'] = 'Image upload is required';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    this.setState((prevState) => ({ ...prevState, dropdown: value }));
  };

  handleCheckboxOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    this.setState((prevState) => {
      const selectedCheckboxOptions = checked
        ? [...prevState.selectedCheckboxOptions, value]
        : prevState.selectedCheckboxOptions.filter((v) => v !== value);
      return { ...prevState, selectedCheckboxOptions };
    });
  };

  handleSwitcherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    this.setState((prevState) => ({ ...prevState, switcher: checked }));
  };

  handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    this.setState((prevState) => ({ ...prevState, file: file ?? undefined }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    if (this.validate()) {
      onSubmit(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      text: '',
      date: '',
      dropdown: '',
      selectedCheckboxOptions: [],
      switcher: false,
      file: undefined,
      errors: {},
    });
  };

  render() {
    const { text, date, dropdown, checkboxOptions, selectedCheckboxOptions, switcher, errors } =
      this.state;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Image title:
            <input type="text" name="text" value={text} onChange={this.handleInputChange} />
            {errors['text'] && <div className="error">{errors['text']}</div>}
          </label>
          <br />
          <label>
            Image date:
            <input type="date" name="date" value={date} onChange={this.handleInputChange} />
            {errors['date'] && <div className="error">{errors['date']}</div>}
          </label>
          <br />
          <label>
            Category:
            <select name="Category" value={dropdown} onChange={this.handleDropdownChange}>
              <option value="">Select an option</option>
              <option value="People">People</option>
              <option value="Nature">Nature</option>
              <option value="Other">Other</option>
            </select>
            {errors['dropdown'] && <div className="error">{errors['dropdown']}</div>}
          </label>
          <br />
          <label>
            Subscribe:
            {checkboxOptions.map((option) => (
              <label key={option.value}>
                {option.label}
                <input
                  type="checkbox"
                  name="checkboxOptions"
                  value={option.value}
                  checked={selectedCheckboxOptions.includes(option.value)}
                  onChange={this.handleCheckboxOptionChange}
                />
              </label>
            ))}
            {errors['selectedCheckboxOptions'] && (
              <div className="error">{errors['selectedCheckboxOptions']}</div>
            )}
          </label>
          <br />
          <label>
            Access:
            <input
              type="radio"
              name="switcher"
              value="Private"
              checked={switcher}
              onChange={this.handleSwitcherChange}
            />
            Private
            <input
              type="radio"
              name="switcher"
              value="Public"
              checked={!switcher}
              onChange={this.handleSwitcherChange}
            />
            Public
          </label>
          <br />
          <label>
            Image Upload:
            <input type="file" name="file" onChange={this.handleFileChange} />
            {errors['file'] && <div className="error">{errors['file']}</div>}
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default FormContainer;
