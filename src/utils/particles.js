import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: "#1d1d1d", // Fundo escuro para destacar as estrelas
      },
      particles: {
        number: {
          value: 600, // Número reduzido para melhor performance
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff", // Cor branca para parecer estrelas
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0, max: 1 }, // Agora varia corretamente
          random: true,
          animation: {
            enable: true,
            speed: 1.5, // Velocidade da variação de brilho
            minimumValue: 0,
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 3 }, // Agora as estrelas terão tamanhos diferentes
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.5,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.2, // Movimento leve para simular estrelas piscando
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
      retina_detect: true,
    }),
    []
  );
  
  
  


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;