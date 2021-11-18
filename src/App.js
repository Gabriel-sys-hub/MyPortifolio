import './App.css';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import pageNotFound from './components/pageNotFound';
import Projects from './components/Projects/Projects';

function App() {
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/skills" component={ Skills } />
          <Route exact path="/Projects" component={ Projects } />
          <Route path='*' exact={true} component={ pageNotFound } />
        </Switch>
      </div>
  );
}

export default App;
