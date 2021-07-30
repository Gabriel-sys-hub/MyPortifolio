import './style.css';

const Skills = () => {
  return (
    <div className="container">
      <div>
      <h1>Soft Skills</h1>
      <div className="wrapper">
        <div className="card-container">
        <ul>
          <li>Colaboração</li>
          <li>Inteligência Emocional</li>
          <li>Flexibilidade</li>
          <li>Empatia</li>
          <li>Comunicação</li>
        </ul>
        </div>
      </div>
      </div>
      <div>
      <h1>Hard Skills</h1>
      <div className="wrapper">
        <div className="card-container">
        <h2>Linguagens:</h2>
        <ul>
          <li>JavaScript</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Node.js</li>
        </ul>
        </div>
        <div className="card-container">
        <h2>Bibliotecas:</h2>
        <ul>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Redux</li>
        </ul>
        </div>
        <div className="card-container">
        <h2>Ferramentas:</h2>
        <ul>
          <li>Eslint</li>
          <li>VSCode</li>
          <li>Git e Github</li>
          <li>Photoshop</li>
        </ul>
        </div>
      </div>
      </div>
      <div className="icon-container">
      <i className="fab fa-html5"></i>
      <i className="fab fa-js-square"></i>
      <i className="fab fa-react"></i>
      <i className="fab fa-git"></i>
      <i className="fab fa-node-js"></i>
      </div>
    </div>
  )
}

export default Skills;
