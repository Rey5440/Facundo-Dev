import { useCallback } from "react";
import Particles from "react-particles";
// import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
// import configjson from "../config/particlesjs-config";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: "#3c09b4",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#1a0745",
              },
              polygon: {
                nb_sides: 3,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.6012795228245711,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 150.08530152163807,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#7bff00",
              opacity: 0.4,
              width: 3,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 721.5354273894853,
                rotateY: 1202.559045649142,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2.0301930307533627,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 329.93235396821524,
                duration: 2.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: false,
        }}
        init={particlesInit}
      />
    </div>
  );
};
export default ParticlesBackground;
