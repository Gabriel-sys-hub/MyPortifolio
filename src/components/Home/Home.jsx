import "./style.css";

import profilePicture from "../images/profilePicture.jpeg";

const Home = () => {
  return (
    <div className="home">
      <div className="person">
        <div className="overlay__person" />
        <div className="overlay__persontwo" />
        <img src={profilePicture} alt="profilePicture" />
      </div>
      <div className="container">
        <div className="title">
          <h1>Oi, me chamo Gabriel</h1>
          <p className="more">Web Developer Full Stack Student @Trybe</p>
        </div>
        <p className="description">
          Boas-vindas ao meu perfil, meu nome é Gabriel Pimentel Fernandes,
          tenho 27 anos e sou uma pessoa que não desiste fácil de nada, em busca
          de conhecimento e novas experiências. Já trabalhei como fotógrafo e
          designer, como pequeno empreendedor e estou adentrando nessa área de
          tecnologia. Sou estudante de Desenvolvimento Web Fullstack na Trybe,
          da turma 11 desde março de 2021. Apaixonado por esportes, música e
          família. Busco me envolver em projetos que impactam positivamente a
          vida das pessoas e agregam valor para gerações futuras.
        </p>
      </div>
    </div>
  );
};

export default Home;
