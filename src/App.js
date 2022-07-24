import {Routes, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/Navbar';

import Art from './components/pages/Art';
import HackTools from './components/pages/HackTools';
import Home from './components/pages/Home'
import TechBuilds from './components/pages/TechBuilds';
import WebDev from './components/pages/WebDev';



function App() {
  return (
    <div className="App">
      <Navbar />

  
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/art" element={ <Art/> } />
          <Route path="/hacking-tools" element={<HackTools />}/>
          <Route path="/webdev" element={<WebDev /> } />
          <Route path="/tech-builds" element={ <TechBuilds /> } />
      </Routes>

   
    </div>
  );
}

export default App;
