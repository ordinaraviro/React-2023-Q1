import React from 'react';
import FormCard from '../../components/FormCard/FormCard';
import FormContainer from '../../components/FormContainer/FormContainer';
import { FormData } from '../../components/FormContainer/FormContainer';
import './FormPage.scss';

interface FormPageState {
  cards: FormData[];
}

class FormPage extends React.Component<object, FormPageState> {
  constructor(props: object) {
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
        <FormContainer onSubmit={this.handleFormSubmit} />
        <h2>Cards List:</h2>
        {cards.map((formData, index) => (
          <FormCard key={index} formData={formData} />
        ))}
      </div>
    );
  }
}

export { FormContainer, FormPage };
