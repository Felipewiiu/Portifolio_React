import React from 'react';
import styles from './posts.module.scss';

export default function Posts() {
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
    </div>
  );
}
