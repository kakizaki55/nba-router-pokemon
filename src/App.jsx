import Home from './views/Home/Home';
import style from './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonDetails from './views/PokemonDeatils/PokemonDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:region/:name">
            <PokemonDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
