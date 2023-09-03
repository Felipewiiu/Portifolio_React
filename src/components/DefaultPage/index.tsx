import Menu from 'components/menu';
import styles from './DefautPage.module.scss';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';

export default function DefaultPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.container}>
      <Menu
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Outlet />

    </div>

  );
}
