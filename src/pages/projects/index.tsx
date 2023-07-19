import React from 'react';
import styles from './projects.module.scss';

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
      <div className={styles.container__section}>

        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
        <div className={styles.container__card}>
          <div className={styles.container__description}>
            <p>Nome do projeto</p>
            <button>
              Ver mais
            </button>
          </div>
        </div>
       
        

      </div>
    </div>
  );
}
