import './App.css';
import Home from './components/Home';
import ItemList from './components/ItemList';
import NewList from './components/NewList';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/newlist" element={ <NewList /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/contact" element={ <ItemList /> } />
      </Routes>
    </div>
  );
}

export default App;
