import React from 'react';

interface Props {
  cards: Array<{
    name: string;
    date: string;
    option: string;
    checkboxes: boolean[];
    switcher: string;
    file: FileList | null;
    fileUrl?: string;
  }>;
}

const FormCards: React.FC<Props> = ({ cards }) => {
  return (
    <div>
      {cards.length > 0 && (
        <div>
          <h2>Cards:</h2>
          {cards.map((card, index) => (
            <div key={index}>
              <h3>{card.name}</h3>
              <p>{card.date}</p>
              <p>{card.option}</p>
              {card.checkboxes.map((checkbox, checkboxIndex) => (
                <p key={checkboxIndex}>
                  <input type="checkbox" checked={checkbox} disabled />
                  {checkbox ? 'Checked' : 'Unchecked'}
                </p>
              ))}
              <p>{card.switcher}</p>
              {card.file && <img src={card.fileUrl} alt="Selected file" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormCards;
