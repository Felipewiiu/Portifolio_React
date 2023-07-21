import React from 'react';
import styles from './filterCards.module.scss';
import label from 'data/label.json';
import cardsProjetcs from 'types/IcardsProjects';
import Ilabel from 'types/Ilabel';

interface Props {
  dataCards: cardsProjetcs
  setDataCards: React.Dispatch<React.SetStateAction<{
    title: string;
    to: string;
    description: string;
    path: string;
    data: string;
    id: number;
    category: {
        id: number;
        label: string;
    };
}[]>>
}



export default function FiltroCards({dataCards, setDataCards}: Props) {

  const filtercards = (label : string) => {
    const filteredCards = dataCards.filter( card => card.category.label === label);
    setDataCards(filteredCards);
    
    
  };

  return (
    <div className={styles.container__filtro} >
      <h4>Ordenar por: </h4>
      <ul>
        {label.map(label => (
          <li key={label.id} onClick={() => filtercards(label.label)}>
            {label.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

