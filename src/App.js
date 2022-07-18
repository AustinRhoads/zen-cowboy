import {Routes, Route} from 'react-router-dom'

import HackTools from './components/HackTools';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
   
      <h1>Zen Cowboy</h1>
  
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/hack-tools" element={<HackTools />}/>
      </Routes>

   
    </div>
  );
}

export default App;
