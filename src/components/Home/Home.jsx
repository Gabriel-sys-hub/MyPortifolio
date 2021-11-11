import "./style.css";

import profilePicture from "../images/profilePicture.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="person">
        <div className="overlay__person" />
        <div className="overlay__persontwo" />
        <div className="overlay__personthree" />
        <img src={profilePicture} alt="profilePicture" />
      </div>
      <div className="container">
        <div className="title">
          <h1>Oi, me chamo Gabriel</h1>
          <p className="more">Desenvolvedor Front-end</p>
        </div>
        <p className="description">
          Tenho 27 anos sou uma pessoa determinada. Apaixonado por esportes,
          música e família. Busco me envolver em projetos que impactam
          positivamente a vida das pessoas e agregam valor para gerações
          futuras. Já trabalhei como fotografo e designer, como pequeno
          empreendedor e estou adentrando nessa área de tecnologia. Atualmente
          estudo Desenvolvimento Web na Trybe. Tenho experiência em projetos
          pessoais na área de frontend e backend. As principais linguagens &
          libs que trabalho é Javascript, ReactJS, NodeJS, MongoDB, MySQL, SASS
          e Jest. Estou todos os dias buscando melhorar minha base de
          conhecimento, praticando com projetos pessoais e em buscas de novas
          experiências de trabalho.
        </p>
      </div>
    </div>
  );
};

export default Home;
