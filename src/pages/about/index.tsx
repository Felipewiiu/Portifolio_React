import styles from './about.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.img1}></div>
      <h1 className={styles.title}>Eu sou Felipe Oliveira, deixa eu te contar um pouco sobre mim.</h1>
      <section>
        <div>
          <p>Eu nasci na cidade do Rio de Janeiro, tenho 30 anos de idade e atuo no momento como técnico em eletrônica. Estou cursando o último período da faculdade em Rede de computadores, uma das melhores decisões que pude tomar na minha carreira profissional. Desde então, a medida que fui me desenvolvendo no curso descobri minha verdadeira paixão profissional, que é o universo da programação. </p>
          <p>Já faz dois anos e meio que procuro aprender incessantemente sobre como ser um programador Full Stack, sei que é um desejo ambicioso, mas com esforço e organização eu estou conseguindo meu objetivo. Além dos conhecimentos adquiridos na faculdade, sou aluno da plataforma Alura, onde comecei meus estudos de aperfeiçoamento como Front-end, onde estudei os fundamentos de programação WEB. Atualmente meu foco tem sido em desenvolvimento com React JS  e Typescript, desenvolvendo SPAs, onde possuo muitos projetos para demonstrar meus conhecimentos com essa tecnologia. Em paralelo comecei meus estudos dedicado ao Back-end onde estou aprendendo sobre arquitetura de projeto, criação de API seguindo os padrões REST, protocolo HTTP e seus verbos como o (GET, POST, PUT e DELETE) para o banco de dado MongoDb por exemplo e entre outros assuntos relacionados.</p>
          <p>Além de profissão, programação para min é também um hobby, onde desenvolver e testar coisas novas é o que me deixa empolgado em querer ver a magia acontecer. Esse é um breve resumo sobre minha trajetória, muito obrigado por ter chegado até aqui e um forte abraço!  </p>
        </div>
        <div className={styles.img}></div>
      </section>
    </div>
  );
}
