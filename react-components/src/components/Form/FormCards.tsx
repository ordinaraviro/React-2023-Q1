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
            <div key={index} className="card">
              <h3>Title: {card.name}</h3>
              <p>Date: {card.date}</p>
              <p>Category: {card.option}</p>
              <p>
                Tags:{' '}
                {card.checkboxes.map((checkbox, checkboxIndex) => {
                  if (checkbox) {
                    return (
                      <span key={checkboxIndex} className="badge bg-secondary me-1">
                        {card.checkboxes[checkboxIndex]}
                      </span>
                    );
                  }
                })}
              </p>
              <p>Access: {card.switcher ? 'Private' : 'Public'}</p>
              {card.file && <img src={card.fileUrl} alt="Selected file" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormCards;
