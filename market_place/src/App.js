import './App.css';
import Home from './components/Home';
import ItemList from './components/ItemList';
import NewList from './components/NewList';

function App() {
  return (
    <div className="App">
      <Home />
      <NewList />
      <ItemList />
    </div>
  );
}

export default App;
