import Home from './views/Home/Home';
import style from './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonDetails from './views/PokemonDeatils/PokemonDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <div className={style.App}>
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
