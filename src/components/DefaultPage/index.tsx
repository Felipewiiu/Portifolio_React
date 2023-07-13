import Menu from 'components/menu';
import styles from './DefautPage.module.scss';
import {Outlet} from 'react-router-dom';

export default function DefaultPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container__menu}>
        <Menu/>

      </div>

      <div className={styles.container__descricao}>
        <Outlet/>
      </div>
    </div>

  );
}
