import React from 'react';
import styles from './home.module.scss';
import { ReactComponent as Github } from 'assets/github.svg';
import { ReactComponent as Instagran } from 'assets/instagran.svg';
import { ReactComponent as Linkedin } from 'assets/linkedin.svg';
import { ReactComponent as GithubYellow } from 'assets/square-githubYellow.svg';
import { ReactComponent as InstagranYellow } from 'assets/square-instagramYellow.svg';
import { ReactComponent as LinkedinYellow } from 'assets/linkedinYellow.svg';
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
            <div className={classNames({
              [styles.socialMedia]:true,
              [styles['socialMedia--dark']]: theme === 'dark'? true: false
            })}>
              <a href="https://github.com/Felipewiiu" target='blank'>{theme === 'dark'? <GithubYellow/>: <Github/>}</a>
              <a href="https://www.instagram.com/" target='blank'>{theme === 'dark'? <InstagranYellow/>: <Instagran/>}</a>
              <a href="https://www.linkedin.com/in/felipe-front-end/" target='blank'>{theme === 'dark'? <LinkedinYellow/>: <Linkedin/>}</a>
            </div>

          </div>
          <div className={classNames({
            [styles.container__imgProfile]:true,
            [styles['container__imgProfile--dark']]: theme === 'dark'? true: false
          })}></div>
        </div>

       
      </div>



    </section >
  );
}
