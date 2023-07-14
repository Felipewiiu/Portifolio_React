import React from 'react';
import styles from './home.module.scss';
import { ReactComponent as Github } from 'assets/github.svg';
import { ReactComponent as Instagran } from 'assets/instagran.svg';
import { ReactComponent as Linkedin } from 'assets/linkedin.svg';


export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.container__secundary}>
        <h1 className={styles.container__title}>
          Front-end developer,
          focado em resultado e um curioso.
        </h1>
        <p>
          Eu sou Felipe Oliveira, e
          me especializo em React JS.
          Acredito que metas bem planejadas
          te levam a grandes resultados, sigo
          minha trajetória com o objetivo de evoluir
          para se tornar um Dev Full-stack.
        </p>
        <div className={styles.container__img}>
          <div className={styles.container__distribution}>
            <Github />
            <Instagran />
            <Linkedin />
          </div>
        </div>
      </div>

    </section>
  );
}
