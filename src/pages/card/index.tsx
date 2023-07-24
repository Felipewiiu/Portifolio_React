import DefaultPage from 'components/DefaultPage';
import styles from './Card.module.scss';
import Data from 'data/cardsProjects.json';

import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { url } from 'inspector';

export default function Cards() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cards = Data.find(card => card.id === Number(id));

  if (!cards) {
    navigate('*');
    return <h1>Não encontrado</h1>;
  }


  return (
    <Routes>
      <Route path='*' element={<DefaultPage />}>
        <Route index element={
          <section className={styles.container}>
            <div className={styles.container__banner}>
              <h1>{cards.title}</h1>
              <div className={styles.container__img}
                style={{
                  backgroundImage: `url(${cards.path})`,

                }}
              >

              </div>

            </div>
            <div className={styles.container__description}>
              <h3 className={styles.description}>Descrição do projeto</h3>
              <p>
                Alura Space é uma aplicação escrita em React js  onde é
                possível manipular uma galeria de  fotos do espaço!
                O principal motivo de desenvolvimento dessa página é aprendizado sobre
                manipulação de estados, entender sobre arquivos estáticos, introdução
                ao Sass e como fazer o deploy na vercel.
              </p>
            </div>
          </section>
        } />

      </Route>

    </Routes>
  );
}
