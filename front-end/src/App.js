import './App.css';
import Forecast from './components/Forecast/Forecast';
import Search from './components/Search/Search';
import TempInfo from './components/TempInfo/TempInfo';

function App() {
  return (
   <div>
      <h1>Busque aqui a previsão da cidade desejada!</h1>
      <Forecast/>
      <Search/>
      <TempInfo/>
   </div>
  );
}

export default App;
