import Home from './views/Home/Home';
import style from './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonDetails from './views/PokemonDeatils/PokemonDetails';
import ItemList from './views/ItemList/ItemList';

function App() {
  return (
    <Router>
      <Header />
      <div className={style.App}>
        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
