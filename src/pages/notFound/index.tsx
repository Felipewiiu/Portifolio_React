import styles from './Notfound.module.scss';
import {ReactComponent as NotFoundSvg} from 'assets/notFoundImg/notFounds.svg';
import {useNavigate} from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container} >
      <h1>Página não encontrada</h1>
      < NotFoundSvg/>
      <button onClick={() => navigate(-1)} >Voltar</button>
    </div>
  );
}
