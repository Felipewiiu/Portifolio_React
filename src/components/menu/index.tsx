import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Hamburguer } from 'components/menu/image/hamburguer.svg';
import { ReactComponent as Light } from 'components/menu/image/light_mode.svg';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Moon } from './image/moon.svg';



export default function Menu() {
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);

  const [mode, setMode] = useState(false);
  console.log(menuState);

  const handleMenuState = () => {
    setMenuState(!menuState);

  };

  const changeMode = () => {
    setMode(!mode);
    console.log(mode);
  };

  const changeIcon = () => {
    if (mode) {
      return (
        <>
          <Moon />
          <span className={styles.Mode__text}> Dark mode</span>
        </>
      );
    } else {
      return (
        <>
          <Light />
          <span className={styles.Mode__text}> Light mode</span>
        </>
      );
    }
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
      <div className={styles.container__mode} onClick={() => changeMode()}>{changeIcon()}</div>
      <Hamburguer onClick={handleMenuState} className={styles.hamburguer} />
    </div>
  );
}
