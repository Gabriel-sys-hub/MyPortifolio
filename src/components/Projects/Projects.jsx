import "./style.css";

import toDoList from "../images/toDoList.png";
import colorGuess from "../images/colorGuess.png";
import pixelArt from "../images/palet.png";
import pokedexVanilla from "../images/pokedexVanilla.png";
import question from "../images/question.png";

import { useState } from "react";

const Projects = () => {
  const [activeDescription, setActiveDescription] = useState(0);

  return (
    <div className="projects">
      <div className="imgContainer">
        <h1>To do List</h1>
        <img
          onClick={() => setActiveDescription(1)}
          src={toDoList}
          alt="toDoList"
          className="projectImage"
        />
        <div className={activeDescription === 1 ? "active" : "desactive"}>
          <p>
            A task list, that you can add new tasks, remove, remove finished
            tasks, save tasks on local storage, change priority and remove all
            tasks.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gabriel-sys-hub.github.io/Projetos-Trybe/todolistTry/index.html"
          >
            <button className="projectButton" type="button">
              To do List
            </button>
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <h1>Pixel Art</h1>
        <img
          onClick={() => setActiveDescription(2)}
          src={pixelArt}
          alt="toDoList"
          className="projectImage"
        />
        <div div className={activeDescription === 2 ? "active" : "desactive"}>
          <p>
            A board that you can paint with random colors a pixel art, you can
            choice diferent quantity of coluns and lines for the size of the
            board.
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
        <h1>Color Guess</h1>
        <img
          onClick={() => setActiveDescription(3)}
          src={colorGuess}
          alt="toDoList"
          className="projectImage"
        />
        <div div className={activeDescription === 3 ? "active" : "desactive"}>
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
        <h1>Pokedex - Vanilla Javascript</h1>
        <img
          onClick={() => setActiveDescription(4)}
          src={pokedexVanilla}
          alt="toDoList"
          className="projectImage"
        />
        <div div className={activeDescription === 4 ? "active" : "desactive"}>
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
        <h1>Question</h1>
        <img
          onClick={() => setActiveDescription(5)}
          src={question}
          alt="toDoList"
          className="projectImage"
        />
        <div div className={activeDescription === 5 ? "active" : "desactive"}>
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
    </div>
  );
};

export default Projects;
