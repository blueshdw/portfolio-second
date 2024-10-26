import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import OurGames from './components/OurGames';
import Reach from './components/Reach';
import TheTeam from './components/TheTeam';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <OurGames />
      <TheTeam />
      <Reach />
    </div>
  );
}

export default App;
