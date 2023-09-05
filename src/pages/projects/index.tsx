import { useState } from 'react';
import styles from './projects.module.scss';
import Data from 'data/cardsProjects.json';
import FiltroCards from './filterCards';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';

export default function Projects() {
  const {theme} = useContext(ThemeContext);

  const [dataCards, setDataCards] = useState(Data);
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]:true,
      [styles['container--dark']]: theme === 'dark'? true : false
    })}>

      <h1 className={classNames({
        [styles.container__title]:true,
        [styles['container__title--dark']]: theme === 'dark'? true : false
      })}>
        Confira o que eu ando aprontando!
      </h1>
      <p>
        Aqui você encontra todos os projetos que
        venho construindo durante o tempo, com o objetivo
        de praticar os conhecimentos adquiridos nos cursos da Alura.
      </p>

      <FiltroCards dataCards={Data} setDataCards={setDataCards} />

      <div className={styles.container__section}>

        {dataCards.map(card => (

          <div
            key={card.id}
            className={styles.container__card}
            // onClick={() => navigate(`/card/${card.id}`)}
          >
            <div className={styles.container__img}>
              <img src={card.path} alt={card.title} />
            </div>
            <div className={styles.container__description}>
              <p>{card.title}</p>
              <button>
                <a  onClick={() => navigate(`/card/${card.id}`)} >
                  Espiar
                </a>
              </button>
            </div>
          </div>


        ))}





      </div>
    </div>
  );
}
