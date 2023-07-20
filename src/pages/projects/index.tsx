import React from 'react';
import styles from './projects.module.scss';
import Data from 'data/imageProject.json';
import label from './filterCards/label.json';

export default function Projects() {
  return (
    <div className={styles.container}>

      <h1 className={styles.container__title}>
        Confira o que eu ando aprontando.
      </h1>
      <p>
        Aqui você pode conferir todos os projetos que
        venho construindo durante o tempo, com o objetivo
        de praticar os conhecimentos adquiridos nos cursos da Alura.
      </p>

      <div className={styles.container__filtro} >
        <h4>Ordenar por: </h4>
        <ul>
          {label.map(label => (
            <li key={label.id} onClick={() => console.log('Clicou')}>
              {label.label}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.container__section}>

        {Data.map(card => (

          <div key={card.id} className={styles.container__card} >
            <div className={styles.container__img}>
              <img src={card.path} alt={card.title} />
            </div>
            <div className={styles.container__description}>
              <p>Projeto: {card.title}</p>
              <button>
                <a href={card.to} target='blank' >
                  Ver mais
                </a>
              </button>
            </div>
          </div>


        ))}





      </div>
    </div>
  );
}
