import React from 'react';

export interface FormData {
  text: string;
  date: string;
  dropdown: string;
  checkbox: boolean;
  switcher: boolean;
  file: File | undefined;
}

interface FormContainerProps {
  onSubmit: (formData: FormData) => void;
}

class FormContainer extends React.Component<FormContainerProps, FormData> {
  constructor(props: FormContainerProps) {
    super(props);

    this.state = {
      text: '',
      date: '',
      dropdown: '',
      checkbox: false,
      switcher: false,
      file: undefined,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    this.setState((prevState) => ({ ...prevState, dropdown: value }));
  };

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    this.setState((prevState) => ({ ...prevState, checkbox: checked }));
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
    onSubmit(this.state);
  };

  render() {
    const { text, date, dropdown, checkbox, switcher } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:
            <input type="text" name="text" value={text} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Date:
            <input type="date" name="date" value={date} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Dropdown:
            <select name="dropdown" value={dropdown} onChange={this.handleDropdownChange}>
              <option value="">Select an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <br />
          <label>
            Checkbox:
            <input
              type="checkbox"
              name="checkbox"
              checked={checkbox}
              onChange={this.handleCheckboxChange}
            />
          </label>
          <br />
          <label>
            Switcher:
            <input
              type="radio"
              name="switcher"
              value="option1"
              checked={switcher}
              onChange={this.handleSwitcherChange}
            />
            Option 1
            <input
              type="radio"
              name="switcher"
              value="option2"
              checked={!switcher}
              onChange={this.handleSwitcherChange}
            />
            Option 2
          </label>
          <br />
          <label>
            File Upload:
            <input type="file" name="file" onChange={this.handleFileChange} />
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
