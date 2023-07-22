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
  const [close, setClose] = useState<number>();
  const [desable, setDesable] = useState(true);
  console.log(desable);

  const clearFilter = (data: cardsProjetcs) => {
    setDataCards(data);
    setDesable(false);
  };


  const filtercards = (id: number) => {
    if (id === close) return setClose(0);
    const filteredCards = dataCards.filter(card => card.category.id === id);
    setDataCards(filteredCards);
    setClose(id);
    if (desable === false) return;

    console.log('Passou teste');
    setDesable(true);


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
              [styles['container__close--ativo']]: close === label.id ? desable : ''
            })}>x</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

