import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Portifolio from './containers/portifolio';
import Skills from './containers/skills';
import NavBar from './componets/navBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils/particles.js';

function App() {

  const handleInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="App">
      {/* particles js*/}

      <Particles id='particles' options={particles} init={handleInit}/>

      {/* navbar */}
      <NavBar/>

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