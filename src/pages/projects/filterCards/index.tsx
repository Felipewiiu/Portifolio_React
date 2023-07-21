import React from 'react';
import styles from './filterCards.module.scss';
import label from './label.json';
import cardsProjetcs from 'types/IcardsProjects';

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

  // const filtercards = (label) => {
  //   const filteredCards = dataCards.filter( card =>{
  //     card.category === 
  //   })
  // }

  return (
    <div className={styles.container__filtro} >
      <h4>Ordenar por: </h4>
      <ul>
        {label.map(label => (
          <li key={label.id} onClick={() => console.log(label.label)}>
            {label.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

