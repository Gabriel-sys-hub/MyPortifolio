import "./style.css";

import toDoList from "../images/toDoList.png";
import colorGuess from "../images/colorGuess.png";
import pixelArt from "../images/palet.png";
import pokedexVanilla from "../images/pokedexVanilla.png";
import question from "../images/question.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  return (
    <Carousel className="projects">
      <div className="imgContainer">
        <img
          src="https://user-images.githubusercontent.com/77814658/141337479-fb403b78-aa02-4eec-ace7-9af11e8763a9.png"
          alt="ebytr"
          className="projectImage"
        />
        <div className={"active"}>
          <p>
            O projeto é uma To Do list, onde se pode criar, deletar, editar,
            registrar usuário, mudar o status e logar. Foi construido toda API
            onde vai receber os dados, com Node.js e Express para fazer a
            ligação com o Front, usando o Axios para fazer as requisições. O
            projeto foi estruturado com testes unitarios e ainda está em
            andamento
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gabriel-sys-hub/Ebytr"
          >
            <button className="projectButton" type="button">
              Ebytr - Lista de Tarefas
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img
          src="https://user-images.githubusercontent.com/77814658/141337489-cf9528cf-04ec-4c9d-848f-1cf6109806bf.png"
          alt="corebiz"
          className="projectImage"
        />
        <div className={"active"}>
          <p>
            Layout responsivo feito com intuito de treinamento. Um e-comerce,
            onde você tem um carousel que recebe itens de uma API, assim sendo
            possível a compra e adicioanr ao seu carrinho.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Gabriel-sys-hub/corebiz."
          >
            <button className="projectButton" type="button">
              Corebiz - Carrinho de Compras
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src={toDoList} alt="toDoList" className="projectImage" />
        <div className={"active"}>
          <p>
            Uma lista de tarefas feita totalmente em Javascript, onde se pode
            adicionar, ordenar, salvar no localstorage, finalizar uma tarefa,
            deletar tarefa finalizada.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gabriel-sys-hub.github.io/Projetos-Trybe/todolistTry/index.html"
          >
            <button className="projectButton" type="button">
              Lista de Tarefas - Vanilla Javascript
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src={pixelArt} alt="toDoList" className="projectImage" />
        <div className={"active"}>
          <p>
            Uma aplicação web, onde você pode escolher o tamanho do quadro em pixels e as cores que quer usar, nela você pode pintar o que quiser e se divertir.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gabriel-sys-hub.github.io/Projetos-Trybe/pixelArt/index.html"
          >
            <button className="projectButton" type="button">
              Pixel Art
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src={colorGuess} alt="toDoList" className="projectImage" />
        <div className={"active"}>
          <p>
            A fun game that you can try to guess the color as the title say. You
            score points and lose points as you aswer a wrong question.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gabriel-sys-hub.github.io/Projetos-Trybe/colorGuess/"
          >
            <button className="projectButton" type="button">
              Color Guess
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src={pokedexVanilla} alt="toDoList" className="projectImage" />
        <div className={"active"}>
          <p>
            A application that simulate a pokedex, you can filter pokemons by
            name and type. It gives the image and some information about each
            pokemon.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gabriel-sys-hub.github.io/Projetos-Trybe/pokedex/"
          >
            <button className="projectButton" type="button">
              Pokedex - Vanilla Javascript
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src={question} alt="toDoList" className="projectImage" />
        <div className={"active"}>
          <p>
            A room application, you can login via google, create a room, give
            invites for others people, ask questions, aswer, like, delete and
            others functionalities.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://let-me-ask-5f558.web.app/"
          >
            <button className="projectButton" type="button">
              Question - Chat Room
            </button>
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default Projects;
