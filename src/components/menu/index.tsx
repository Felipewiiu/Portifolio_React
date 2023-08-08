import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Hamburguer } from 'components/menu/image/hamburguer.svg';
import { useState } from 'react';




export default function Menu() {
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);

  console.log(menuState);
  const handleMenuState = () => {
    let a = true;
    setMenuState(a);
    a = false;
  
  };


  return (
    <div className={styles.container}>
      <nav className={styles.container__nav}>

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
      <div
        className={styles.container__hamburguer}>
        <Hamburguer
          onClick={handleMenuState}
          className={styles.hamburguer}
        />
      </div>
    </div>
  );
}
