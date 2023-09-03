import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Hamburguer } from 'components/menu/image/hamburguer.svg';
import { ReactComponent as Light } from 'components/menu/image/light_mode.svg';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Moon } from './image/moon.svg';

interface Iprops {
  toggleTheme: () => void
  theme: string;
}

export default function Menu({toggleTheme, theme}:Iprops) {
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);

  const [mode, setMode] = useState(false);

  const handleMenuState = () => {
    setMenuState(!menuState);

  };

  const changeMode = () => {
    setMode(!mode);
    toggleTheme();
    console.log(theme);
  };

  const changeIcon = () => {
   
    if (mode) {
      return (
        <>
          <div className={styles.Mode__container}>
            <Moon />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.Mode__container}>
            <Light />
          </div>

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
