import './style.css';

const Skills = () => {
  const languages = [
    "Javascript",
    "CSS",
    "HTML",
    "Node.js"
  ]

  const library = [
    "ReactJS",
    "Bootstrap",
    "Redux",
  ]

  const tools = [
    "ESlint",
    "VScode",
    "Git & GitHub",
    "Photoshop",
    "Figma",
  ]

  const softSkills = [
    "Colaboração",
    "Inteligencia Emocional",
    "Flexibilidade",
    "Empatia",
    "Comunicação",
  ]

  return (
    <div className="container__skills">
      <div>
      <h1>Soft Skills</h1>
      <div className="wrapper">
        <div className="card-container">
        { softSkills.map((item) => (
          <ul>
            <li>{ item }</li>  
          </ul>
        ))}
        </div>
      </div>
      </div>
      <div>
      <h1>Hard Skills</h1>
      <div className="wrapper">
        <div className="card-container">
          <h2>Linguagens:</h2>
          { languages.map((item) => (
            <ul>
              <li>{ item }</li>
            </ul>
          ))}
          </div>
        <div className="card-container">
          <h2>Bibliotecas:</h2>
          { library.map((item) => (
            <ul>
              <li>{ item }</li>
          </ul>
          ))}
        </div>
        <div className="card-container">
          <h2>Ferramentas:</h2>
          { tools.map((item) => (
            <ul>
              <li> { item }</li>
            </ul>
          ))}
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
