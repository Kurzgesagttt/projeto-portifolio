import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Portifolio from './containers/portifolio';
import Skills from './containers/skills';

function App() {
  return (
    <div className="App">
      {/* particles js*/}

      {/* navbar */}

      {/* main page content */}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portifolio' element={<Portifolio />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </div>
  );
}
export default App;