import {Routes, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';
import Art from './components/pages/Art';
import HackTools from './components/pages/HackTools';
import Home from './components/pages/Home'



function App() {
  return (
    <div className="App">
      <Navbar />

  
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/art" element={ <Art/> } />
          <Route path="/hacking-tools" element={<HackTools />}/>
      </Routes>

   
    </div>
  );
}

export default App;
