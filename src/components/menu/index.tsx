import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Hamburguer } from 'components/menu/image/hamburguer.svg';
import { ReactComponent as Light } from 'components/menu/image/light_mode.svg';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Sun } from './image/sun.svg';



export default function Menu() {
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);
  console.log(menuState);
  const handleMenuState = () => {
    setMenuState(!menuState);

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
        className={classNames({
          [styles.container__hamburguer]: true,
          [styles['container__hamburguer--active']]: menuState
        })}>
        <ul>
          {routesMenu.map(rota => (
            <li key={rota.id} className={styles.options}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Light className={styles.lightMode} />
      <span className={styles.lightMode__text}>Light Mode</span>
      <Hamburguer onClick={handleMenuState} className={styles.hamburguer}/>
    </div>
  );
}
