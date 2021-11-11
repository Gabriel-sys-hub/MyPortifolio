import "./style.css";

const Skills = () => {
  const linguagens = [
    {
      nome: "Javascript",
      src: "fab fa-js-square",
    },
    {
      nome: "CSS",
      src: "fab fa-css3-alt",
    },
    {
      nome: "HTML",
      src: "fab fa-html5",
    },
    {
      nome: "NodeJs",
      src: "fab fa-node-js",
    },
  ];

  const library = [
    {
      nome: "ReacJs",
      src: "fab fa-react",
    },
    {
      nome: "Bootstrap",
      src: "fab fa-bootstrap",
    },
  ];
  
  const tools = [
    {
      nome: "Git",
      src: "fab fa-git",
    },
    {
      nome: "Figma",
      src: "fab fa-figma",
    },
  ];

  return (
    <div className="container__skills">
      <div>
        <div className="wrapper">
          <div className="card-container">
            <h2>Linguagens</h2>
            {linguagens.map((item) => (
              <ul>
                <li>
                  <i className={item.src}></i>
                  {item.nome}
                </li>
              </ul>
            ))}
          </div>
          <div className="card-container">
            <h2>Bibliotecas</h2>
            {library.map((item) => (
              <ul>
                <li>
                  <i className={item.src}></i>
                  {item.nome}
                </li>
              </ul>
            ))}
          </div>
          <div className="card-container">
            <h2>Ferramentas</h2>
            {tools.map((item) => (
              <ul>
                <li>
                  <i className={item.src}></i>
                  {item.nome}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
