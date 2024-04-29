import React, { useState, useEffect } from "react";
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
            <div>
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
            <div>
              <Proyectos handleSelected={handleSelected} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
