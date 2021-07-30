import './style.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          Hi,
          I am Gabriel
        </h1>
        <p className="more">Web Developer Full Stack Student @Trybe</p>
      </div>
      <div className="person">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQENdulQXZCUxg/profile-displayphoto-shrink_200_200/0/1614791459884?e=1628121600&v=beta&t=Kp2JNFQ3t3_2qwwLqLhUkFo52idcH2D-tbAy9AFZK_o" alt="personpicture" />
      </div>
      <div className="button">
      <Link to="about">
          <button id="about">More Info</button>
      </Link>
      </div>
    </div>
  )
}

export default Home
