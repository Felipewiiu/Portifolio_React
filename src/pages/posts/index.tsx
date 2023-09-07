import styles from './posts.module.scss';
import gif from 'assets/Finn gif 9.gif';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';

export default function Posts() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <h1 style={theme === 'dark'? {color: '#fdfdfd'} : {color:'#2d2d2d'}} >Estamos trabalhando nisso!</h1>
      <img src={gif} alt="" />
    </div>
  );
}
