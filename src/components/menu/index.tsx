import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link, useLocation } from 'react-router-dom';




export default function Menu() {
  const location = useLocation();
  

  return (
    <nav className={styles.container}>
      <ul className={styles.container__list}>
        {routesMenu.map(rota => (
          <li key={rota.id} className={`
            ${styles.container__link}
            ${location.pathname === rota.to ? styles.container__highlighted : ''}
          `}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
