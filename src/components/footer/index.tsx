import { ReactComponent as Github } from './socialMediaImg/square-github 1.svg';
import { ReactComponent as Instagran } from './socialMediaImg/square-instagram 1.svg';
import { ReactComponent as Linkedin } from './socialMediaImg/linkedin 1.svg';
import styles from './footer.module.scss';


export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.container__footer}>
        <p>
          © 2023 Felipe oliveira. Todos os direitos reservados.
        </p>
        <div className={styles.footer}>

          <a href="https://github.com/Felipewiiu" target='blank'><Github /></a>
          <a href="https://www.instagram.com/" target='blank'><Instagran /></a>
          <a href="https://www.linkedin.com/in/felipe-front-end/" target='blank'><Linkedin /></a>

        </div>
      </div>

    </footer>
  );
}
