import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./componentes/nav/nav";
import SobreMi from "./componentes/sobreMi/sobreMi";
import Proyectos from "./componentes/proyectos/proyectos";
import "./App.css";
import Footer from "./componentes/footer/footer";
import ParticlesBackground from "./componentes/particlesBackground";

const App = () => {
  const [selected, setSelected] = useState("Sobre Mí");
  const [prevSelected, setPrevSelected] = useState("");

  const handleSelected = (prop) => {
    setPrevSelected(selected);
    setSelected(prop);
  };

  //   const handleTouchMove = (event, place) => {
  //     if (event.touches && event.touches.length === 1) {
  //       const currentX = event.touches[0].clientX;
  //       const deltaX = currentX - initialSwipe;

  //       if (Math.abs(deltaX) > 50) {
  //         if (deltaX > 0 && place !== "proyectos") {
  //           // Deslizamiento hacia la derecha, selecciona "Proyectos"
  //           setSelected("Proyectos");
  //         } else if (deltaX < 50 && place !== "sobre mi") {
  //           // Deslizamiento hacia la izquierda, selecciona "Sobre Mí"
  //           setSelected("Sobre Mí");
  //         }
  //       }
  //     }
  //   };

  //   const handleTouchStart = (event) => {
  //     if (event.touches && event.touches.length === 1) {
  //       setInitialSwipe(event.touches[0].clientX);
  //     }
  //   };

  //   const handleTouchEnd = () => {
    //     setInitialSwipe(0);
    //   };
    
    return (
      <div className="App">
      <ParticlesBackground />
      <Nav selected={selected} handleSelected={handleSelected} />
      <AnimatePresence mode="wait">
        {selected === "Sobre Mí" && (
          <motion.div
          key="sobre-mi"
          initial={
            prevSelected !== ""
            ? { opacity: 0, x: "-100%" }
            : { opacity: 0, y: "100%" }
          }
          animate={
            prevSelected !== "" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }
          }
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.5 }}
          >
            <div
            // onTouchStart={handleTouchStart}
            // onTouchMove={(e) => handleTouchMove(e, "sobre mi")}
            // onTouchEnd={handleTouchEnd}
            >
              <SobreMi />
            </div>
          </motion.div>
        )}
        {selected === "Proyectos" && (
          <motion.div
            key="proyectos"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <div
            // onTouchStart={handleTouchStart}
            // onTouchMove={(e) => handleTouchMove(e, "proyectos")}
            // onTouchEnd={handleTouchEnd}
            >
              <Proyectos handleSelected={handleSelected} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <br></br>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
