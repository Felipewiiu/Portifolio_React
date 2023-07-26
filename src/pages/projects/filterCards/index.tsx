import { useState } from 'react';
import styles from './filterCards.module.scss';
import label from 'data/label.json';
import cardsProjetcs from 'types/IcardsProjects';
import classNames from 'classnames';
import Data from 'data/cardsProjects.json';



interface Props {
  dataCards: cardsProjetcs
  setDataCards: React.Dispatch<React.SetStateAction<{
    title: string;
    to: string;
    toGithub: string;
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



export default function FiltroCards({ dataCards, setDataCards }: Props) {
  const [idTag, setIdTag] = useState<number>();
  const [state, setState] = useState(false);
  const [repeat, setRepeat] = useState(true);
  

  const clearFilter = (data: cardsProjetcs) => {
    setDataCards(data);
    setState(false);
    setRepeat(false);
    
  };

  const filtercards = (id: number) => {
    if (id === idTag && repeat === true) return;

    const filteredCards = dataCards.filter(card => card.category.id === id);
    setDataCards(filteredCards);
    setIdTag(id);
    setState(true);
    setRepeat(true);
    
  };


  return (
    <div className={styles.container__filtro} >
      <h4>Ordenar por: </h4>
      <ul>
        {label.map(label => (
          <li key={label.id} onClick={() => filtercards(label.id)}>
            {label.label}
            <p onClick={() => clearFilter(Data)} className={classNames({
              [styles.container__close]: true,
              [styles['container__close--ativo']]: idTag === label.id ? state : ''
            })}>x</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

