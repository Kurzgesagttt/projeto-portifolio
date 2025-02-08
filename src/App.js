import './App.css';
import { Routes, Route } from 'react-router-dom';
import { initParticlesEngine } from "@tsparticles/react";
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Portifolio from './containers/portifolio';
import Skills from './containers/skills';
import NavBar from './componets/navBar';
import ParticlesComponent from './utils/particles';
import { loadSlim } from "@tsparticles/slim";

function App() {

  const handleInit = async () => {
    await initParticlesEngine(async (engine) => {
      await loadSlim(engine); // ou outro preset necessário
    });
  };

  return (
    <div className="App">
      {/* particles js*/}
      <ParticlesComponent id='particles' init={handleInit}/>

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