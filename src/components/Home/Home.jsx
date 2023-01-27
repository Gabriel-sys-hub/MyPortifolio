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
          Tenho 27 anos e sou uma pessoa determinada. Sou Apaixonado por
          esportes, música e pela minha família. Busco me envolver em projetos
          que impactam positivamente a vida das pessoas e agregam valor para
          gerações futuras. Já trabalhei como fotografo e designer, como
          empreendedor e agora ingressando na área de tecnologia. A tecnologia
          nós trás oportunidades de sermos melhores e buscar nela algo que vá
          agregar na vida das pessoas, vai além de buscar um trabalho é um
          prazer acordar e poder trabalhar com o que ama.
        </p>
      </div>
    </div>
  );
};

export default Home;
