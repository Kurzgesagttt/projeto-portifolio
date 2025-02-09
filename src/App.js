import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import { initParticlesEngine } from "@tsparticles/react";
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Resume from './containers/resume';
import Portifolio from './containers/portifolio';
import Skills from './containers/skills';
import NavBar from './components/navBar';
import ParticlesComponent from './utils/particles';
import { loadSlim } from "@tsparticles/slim";

function App() {
  const location = useLocation();
  console.log(location)

  const handleInit = async () => {
    await initParticlesEngine(async (engine) => {
      await loadSlim(engine); // ou outro preset necessário
    });
  };

  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js*/}
      {
        renderParticlesJsInHomePage && (
          <ParticlesComponent id='particles' init={handleInit} />
        )
      }



      {/* navbar */}
      <NavBar />

      {/* main page content */}
      <div className='App_main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portifolio' element={<Portifolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>



    </div>
  );
}
export default App;