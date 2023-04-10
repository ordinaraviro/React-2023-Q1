import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import FormCards from '../../components/Form/FormCards';

interface FormData {
  name: string;
  date: string;
  option: string;
  checkboxes: boolean[];
  switcher: string;
  file: FileList | null;
  fileUrl?: string;
}

const FormPage: React.FC = () => {
  const [cards, setCards] = useState<FormData[]>([]);

  const onSubmit = (formData: FormData) => {
    setCards((prevCards) => [...prevCards, formData]);
  };

  return (
    <div>
      <Form onSubmit={onSubmit} />
      <FormCards cards={cards} />
    </div>
  );
};

export default FormPage;
