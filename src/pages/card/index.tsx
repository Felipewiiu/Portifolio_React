import DefaultPage from 'components/DefaultPage';
import styles from './Card.module.scss';
import Data from 'data/cardsProjects.json';
import Description from 'data/descriptionCards.json';
import { ReactComponent as ToGoBack } from 'assets/toGoBack.svg';
import { ReactComponent as ToGo } from 'assets/toGo.svg';
import { useRef } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import NotFound from 'pages/notFound';



export default function Cards() {
  const navigate = useNavigate();
  const { id } = useParams();
  const cards = Data.find(card => card.id === Number(id));
  const content = Description.find(item => item.id === Number(id));
  const Previous = id === '1' ? Number(id) - 0 : Number(id) - 1;
  const next = id === String(Description.length) ? Number(id) + 0 : Number(id) + 1;
  const titleRef = useRef<HTMLHeadingElement>(null);



  if (!cards) {
    navigate('*');
    return <NotFound />;
  }

  const handleBackClick = () => {
    titleRef.current?.scrollIntoView({ block: 'end', behavior: 'smooth' });
  };


  return (
    <Routes>
      <Route path='/' element={<DefaultPage />}>
        <Route index element={
          <section className={styles.container}>
            <div className={styles.container__banner}>
              <div className={styles.title}>
                <h1 ref={titleRef} >{cards.title}</h1>
                <div className={styles.container__btn}>
                  <div>
                    <a href={cards.toGithub} target='blank'>
                      <button className={styles.btn}>Link githube</button>
                    </a>
                    <a href={cards.to} target='blank'>
                      <button className={styles.btn}>Link Vercel</button>
                    </a>
                  </div>

                </div>
              </div>
              <div className={styles.container__img}
                style={{
                  backgroundImage: `url(${cards.path})`,

                }}
              >

              </div>


            </div>
            <div className={styles.container__btns}>
              <button
                onClick={() => {
                  navigate(`/card/${Previous}`);
                  handleBackClick();
                }}
                className={styles.toGoBack}
              >
                <ToGoBack />
              </button>
              <button
                onClick={() => {
                  navigate(`/card/${next}`);
                  handleBackClick();
                }}
                className={styles.toGo}
              >
                <ToGo />
              </button>
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


            </div>
          </section>
        } />

      </Route>

    </Routes>
  );
}
