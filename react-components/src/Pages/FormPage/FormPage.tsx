import React, { Component } from 'react';
import './FormPage.scss';

interface FormData {
  text: string;
  date: string;
  dropdown: string;
  checkbox: boolean;
  switcher: boolean;
  file: File | undefined;
}

interface MyFormProps {
  onSubmit: (formData: FormData) => void;
}

class MyForm extends React.Component<MyFormProps, FormData> {
  constructor(props: MyFormProps) {
    super(props);

    this.state = {
      text: "",
      date: "",
      dropdown: "",
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
            <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.handleCheckboxChange} />
          </label>
          <br />
          <label>
            Switcher:
            <input type="radio" name="switcher" value="option1" checked={switcher} onChange={this.handleSwitcherChange} />
            Option 1
            <input type="radio" name="switcher" value="option2" checked={!switcher} onChange={this.handleSwitcherChange} />
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

interface CardProps {
formData: FormData;
}

class Card extends React.Component<CardProps> {
render() {
const { formData } = this.props;
const imageUrl = formData.file && URL.createObjectURL(formData.file);
return (
<div style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
<p>Text: {formData.text}</p>
<p>Date: {formData.date}</p>
<p>Dropdown: {formData.dropdown}</p>
<p>Checkbox: {formData.checkbox ? "Checked" : "Unchecked"}</p>
<p>Switcher: {formData.switcher ? "Option 1" : "Option 2"}</p>
{imageUrl && <img src={imageUrl} alt="uploaded file" style={{ maxWidth: "200px", maxHeight: "200px" }} />}
</div>
);
}
}

interface MyFormContainerState {
cards: FormData[];
}

class MyFormContainer extends React.Component<{}, MyFormContainerState> {
constructor(props: {}) {
super(props);
this.state = {
  cards: [],
};
}

handleFormSubmit = (formData: FormData) => {
this.setState((prevState) => ({ cards: [...prevState.cards, formData] }));
};

render() {
const { cards } = this.state;
return (
<div>
<MyForm onSubmit={this.handleFormSubmit} />
<h2>Cards List:</h2>
{cards.map((formData, index) => (
<Card key={index} formData={formData} />
))}
</div>
);
}
}

export { MyForm, MyFormContainer };
