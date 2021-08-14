import './App.css';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/skills" component={ Skills } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path="/Projects" component={ Projects } />
        </Switch>
      </div>
  );
}

export default App;
