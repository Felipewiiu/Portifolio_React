import DefaultPage from 'components/DefaultPage';
import styles from './Card.module.scss';
import Data from 'data/cardsProjects.json';
import Description from 'data/descriptionCards.json';
import { ReactComponent as ToGoBack } from 'assets/toGoBack.svg';
import { ReactComponent as ToGo } from 'assets/toGo.svg';

import { Routes, Route, useParams, useNavigate } from 'react-router-dom';


export default function Cards() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cards = Data.find(card => card.id === Number(id));
  const content = Description.find(item => item.id === Number(id));
  const Previous = id === '1' ? Number(id) - 0 : Number(id) - 1;
  const next = id === String(Description.length) ? Number(id) + 0 : Number(id) + 1;
  


  if (!cards) {
    navigate('*');
    return <h1>Não encontrado</h1>;
  }


  return (
    <Routes>
      <Route path='/' element={<DefaultPage />}>
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
              <h1 className={styles.description}>Descrição do projeto</h1>
              <p>
                {content?.description}
              </p>

              <h3>Palavras-chaves</h3>
              <div className={styles.container__keyWord}>
                {content?.keyWords.map((word, index) => (
                  <h4 key={index}>{word}</h4>
                ))}


              </div>
              <div className={styles.container__btn}>
                <div>
                  <a href={cards.toGithub} target='blank'>
                    <button className={styles.btn}>Link githube</button>
                  </a>
                  <a href={cards.to} target='blank'>
                    <button className={styles.btn}>Link Vercel</button>
                  </a>
                </div>
                <div className={styles.container__btns}>
                  <button
                    onClick={() => navigate(`/card/${Previous}`)}
                    className={styles.toGoBack}
                  >
                    <ToGoBack />
                  </button>
                  <button
                    onClick={() => navigate(`/card/${next}`)}
                    className={styles.toGo}
                  >
                    <ToGo />
                  </button>
                </div>
              </div>

            </div>
          </section>
        } />

      </Route>

    </Routes>
  );
}
