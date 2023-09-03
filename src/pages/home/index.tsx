import React from 'react';
import styles from './home.module.scss';
import { ReactComponent as Github } from 'assets/github.svg';
import { ReactComponent as Instagran } from 'assets/instagran.svg';
import { ReactComponent as Linkedin } from 'assets/linkedin.svg';
import Menu from 'components/menu';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';



export default function Home() {
  const { theme, toggleTheme} = useContext(ThemeContext);
  console.log(theme);

  return (
    <section className={classNames({
      [styles.container]: true,
      [styles['container--dark']]: theme === 'dark'? true : false
    })}>
      <Menu toggleTheme={toggleTheme} theme={theme} />
      <div className={styles.container__outlet}>
        <div className={styles.content}>
          <div className={classNames({
            [styles.container__secundary]:true,
            [styles['container__secundary--dark']]: theme === 'dark'? true: false
          })}>
            <h1 >
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
            <div className={styles.socialMedia}>
              <a href="https://github.com/Felipewiiu" target='blank'><Github /></a>
              <a href="https://www.instagram.com/" target='blank'><Instagran /></a>
              <a href="https://www.linkedin.com/in/felipe-front-end/" target='blank'><Linkedin /></a>
            </div>

          </div>
          <div className={styles.container__imgProfile}></div>
        </div>

       
      </div>



    </section >
  );
}
