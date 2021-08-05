import './style.css';
import { Link } from "react-router-dom";
import profilePicture from '../images/profilePicture.jpeg';

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
        <img src={ profilePicture } alt="profilePicture" />
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
