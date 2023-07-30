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

      </div>
      <div className={styles.container__containerImg} >
        <div className={styles.container__imgProfile}></div>
        <div className={styles.socialMedia}>
          <a href="https://github.com/Felipewiiu" target='blank'><Github /></a>
          <a href="https://www.instagram.com/" target='blank'><Instagran /></a>
          <a href="https://www.linkedin.com/in/felipe-front-end/" target='blank'><Linkedin /></a>
        </div>


      </div>

    </section >
  );
}
