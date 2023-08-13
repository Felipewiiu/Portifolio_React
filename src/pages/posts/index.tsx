import styles from './posts.module.scss';
import gif from 'assets/Finn gif 9.gif';


export default function Posts() {
  return (
    <div className={styles.container}>
      <h1 style={{ marginTop: '8rem' }} >Nada para mostrar ainda!</h1>
      <img src={gif} alt="" />
    </div>
  );
}
