import "./style.css";
import toDoList from "../images/toDoList.png";
import colorGuess from "../images/colorGuess.png";
import pixelArt from "../images/palet.png";
import { useState } from 'react';

const Projects = () => {
  const [activeDescription, setActiveDescription] = useState(false);
  const [activeDetailButton, setActiveDetailButton] = useState(false);

  return (
    <div className="projects">
      <div className="imgContainer">
      <h1 className={ activeDetailButton ? "active" : "unactive"}>Click to See Details</h1>
        <img 
          onClick={() => setActiveDescription(!activeDescription) }
          src={ toDoList }
          alt="toDoList"
          className="projectImage"
          onMouseEnter={() => setActiveDetailButton(!activeDetailButton)}
          onMouseOut={() => setActiveDetailButton(!activeDetailButton)}
        />
        { activeDescription && (
          <>
            <h1>To do List</h1>
            <p>
              A task list, that you can add new tasks, remove, remove finished
              tasks, save tasks on local storage, change priority and remove all
              tasks.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gabriel-sys-hub.github.io/Projetos-Trybe/todolistTry/index.html">
                <button className="projectButton"type="button">To do List</button>
            </a>
          </>
        )}
      </div>
      <div className="imgContainer">
      <h1 className={ activeDetailButton ? "active" : "unactive"}>Click to See Details</h1>
        <img
          onClick={() => setActiveDescription(!activeDescription) }
          src={ pixelArt }
          alt="toDoList"
          className="projectImage"
          onMouseEnter={() => setActiveDetailButton(!activeDetailButton)}
          onMouseOut={() => setActiveDetailButton(!activeDetailButton)}
        />
        { activeDescription && (
          <>
            <h1>Pixel Art</h1>
            <p>
              A board that you can paint with random colors a pixel art, you can choice diferent quantity of coluns and lines for the size of the board.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gabriel-sys-hub.github.io/Projetos-Trybe/todolistTry/index.html">
                <button className="projectButton"type="button">Pixel Art</button>
            </a>
          </>
        )}
      </div>
      <div className="imgContainer">
        <h1 className={ activeDetailButton ? "active" : "unactive"}>Click to See Details</h1>
        <img
          onClick={() => setActiveDescription(!activeDescription) }
          src={ colorGuess }
          alt="toDoList"
          className="projectImage"
          onMouseEnter={() => setActiveDetailButton(!activeDetailButton)}
          onMouseOut={() => setActiveDetailButton(!activeDetailButton)}
        />
        { activeDescription && (
          <>
            <h1>Color Guess</h1>
            <p>
              A fun game that you can try to guess the color as the title say. You score points and lose points as you aswer a wrong question.
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gabriel-sys-hub.github.io/Projetos-Trybe/todolistTry/index.html">
                <button className="projectButton"type="button">Color Guess</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;
