import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';


export default function Menu() {
  return (
    <nav className={styles.container}>
      <ul className={styles.container__list}>
        {routesMenu.map(rota => (
          <li key={rota.id} className={styles.container__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
