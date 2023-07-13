import Menu from 'components/menu';
import styles from './DefautPage.module.scss';

export default function DefaultPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container__menu}>
        <Menu/>

      </div>
    </div>

  );
}
