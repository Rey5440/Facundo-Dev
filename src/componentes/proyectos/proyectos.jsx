import { useState } from "react";
import { motion } from "framer-motion"; // Importa motion desde framer-motion
import { useMediaQueryHook } from "../../Hooks/useMediaQuery";
import presentacionTrendyTech from "../../videos/presentacionTrendyTech.mp4";
import presentacionAppTurnos from "../../videos/presentacionAppTurnos.mp4";
import css3 from "../../imagenes/css-3.png";
import html5 from "../../imagenes/html-5.png";
import reactIcon from "../../imagenes/ReactIcon.png";
import reduxIcon from "../../imagenes/ReduxIcon.png";
import javascriptIcon from "../../imagenes/JavascriptIcon.png";
import expressIcon from "../../imagenes/ExpressIcon.png";
import nodejsIcon from "../../imagenes/NodejsIcon2.png";
import postgresIcon from "../../imagenes/PostgresIconPNG.png";
import mongoIcon from "../../imagenes/mongoIcon.jpg";
import externalLink from "../../imagenes/external-link.png";
import "./proyectos.css";

const Proyectos = () => {
  const [showMore, setShowMore] = useState("");
  const { md } = useMediaQueryHook();

  const handleShowMore = (prop) => {
    if (showMore === prop) {
      setShowMore("")
    } else {
      setShowMore(prop);
    }
  };

  return (
    <div className="ProjectsCont">
      {/*  //PRIMER PROYECTO// */}
      <div className="CardProject" style={{marginBottom: "20px"}}>
        <div className="ProjectTitle-Type">
          <h3>App Turnos</h3>
          <h4>(E-commerce)</h4>
        </div>
        <div className="ProjectText">
          <p className="ProjectP">
            Es una web app, pensada para todos aquellos dueños de negocios que
            atienden a sus clientes con turnos. Tiene un responsive para todos
            los dispositivos pero más que nada se buscó que parezca una
            aplicación.
          </p>
          <p className="ProjectP">
            Cuenta con el panel de administración más completo de su mercado,
            haciendo que cumpla con la mayor cantidad de posibles casos de uso.
          </p>
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: "1em", opacity: 0 }} // Altura inicial del texto y opacidad a 0
            animate={{
              height: showMore === "AppTurnos" ? "auto" : "1em",
              opacity: showMore === "AppTurnos" ? 1 : 0,
            }} // Altura final del texto (auto para mostrarlo)
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} // Delay para mostrar el segundo párrafo después del primero
          >
            <p className="ProjectP">
              El frontend esta bajo el manto de React y MUI, como asi tambien
              CSS puro, logrando una apariencia minimalista, sencilla y práctica
              para todas los tipos de usuarios.
            </p>
            <br />
          </motion.div>
          <div className="ContHref">
            <button
              className="More"
              onClick={() => handleShowMore("AppTurnos")}
            >
              {showMore === "AppTurnos" ? "mostrar menos" : "leer mas"}
            </button>
          </div>
        </div>
        <div className="ProjectGif">
          <a
            href="https://app-turnos-rcua.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contGifLink">
              <video
                src={presentacionAppTurnos}
                controls
                controlsList="nodownload fullscreen"
                alt="Trendy Tech"
                style={{ width: "100%", maxWidth: "450px" }}
                className="gifProyecto"
              />
              <img
                src={externalLink}
                alt=""
                className={md ? "externalLinkMd" : "externalLink"}
              />
            </div>
          </a>
          <div style={{ margin: "18px" }}>
            <a
              href="https://github.com/Rey5440/Top-Tech-Front"
              title="ir al repositorio"
              className="LinkRepo"
              target="_blank"
              rel="noreferrer"
            >
              repo front
            </a>
            <a
              href="https://github.com/Rey5440/Top-Tech-Back"
              title="ir al repositorio"
              className="LinkRepo"
              target="_blank"
              rel="noreferrer"
            >
              repo back
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={css3}
            style={{ width: "25px", margin: "7px" }}
            alt="Css3"
          ></img>
          <img
            src={html5}
            style={{ width: "25px", margin: "7px" }}
            alt="html5"
          ></img>
          <img
            src={reactIcon}
            style={{ width: "25px", margin: "7px" }}
            alt="React"
          ></img>
          <img
            src={javascriptIcon}
            style={{ width: "25px", margin: "7px", borderRadius: "4px" }}
            alt="Javascript"
          ></img>
          <img
            src={expressIcon}
            style={{ width: "27px", margin: "7px" }}
            alt="Express"
          ></img>
          <img
            src={nodejsIcon}
            style={{ width: "27px", margin: "7px" }}
            alt="Node.js"
          ></img>
          <img
            src={mongoIcon}
            style={{ width: "27px", borderRadius: "4px", margin: "7px" }}
            alt="PostgreSQL"
          ></img>
        </div>
      </div>
      {/* //SEGUNDO PROYECTO// */}
      <div className="CardProject">
        <div className="ProjectTitle-Type">
          <h3>Trendy Tech</h3>
          <h4>(E-commerce)</h4>
        </div>
        <div className="ProjectText">
          <p className="ProjectP">
            Este proyecto es un E-commerce, con fines académicos. Logró cumplir
            los estándares para ser aprobado.
          </p>
          <p className="ProjectP">
            Cuenta con un frontend React, servidor en Express y base de datos
            PostgreSQL.
          </p>
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: "1em", opacity: 0 }} // Altura inicial del texto y opacidad a 0
            animate={{
              height: showMore === "TrendyTech" ? "auto" : "1em",
              opacity: showMore === "TrendyTech" ? 1 : 0,
            }} // Altura final del texto (auto para mostrarlo)
            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} // Delay para mostrar el segundo párrafo después del primero
          >
            <p className="ProjectP">
              El frontend utiliza en varias ocasiones componentes de MUI, tanto
              como CSS puro para posicionamientos, incluso se llegó a utilizar
              el estilado en línea de MUI.
            </p>
            <br />
            <p className="ProjectP">
              También se implementó Redux, para guardar información útil y no
              recurrir al exceso de solicitudes. Posee filtrado combinado, que
              funciona en armonía con los diferentes filtros.
            </p>
            <p className="ProjectP">
              Se ha utilizado JWT para proteger información sensible, Cookies y
              LocalStorage para guardar datos no sensibles con respecto a
              preferencias del usuario y estado de logueo.
            </p>
            <p className="ProjectP">
              El servidor posee una estructura prolija y ordenada.
            </p>
          </motion.div>
          <div className="ContHref">
            <button
              className="More"
              onClick={() => handleShowMore("TrendyTech")}
            >
              {showMore === "TrendyTech" ? "mostrar menos" : "leer mas"}
            </button>
          </div>
        </div>
        <div className="ProjectGif">
          <a
            href="https://trendy-tech.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contGifLink">
              <video
                src={presentacionTrendyTech}
                controls
                controlsList="nodownload fullscreen"
                alt="Trendy Tech"
                style={{ width: "100%", maxWidth: "450px" }}
                className="gifProyecto"
              />
              <img
                src={externalLink}
                alt=""
                className={md ? "externalLinkMd" : "externalLink"}
               />
            </div>
          </a>
          <div style={{ margin: "18px" }}>
            <a
              href="https://github.com/Rey5440/TrendyTech-Front"
              title="ir al repositorio"
              className="LinkRepo"
              target="_blank"
              rel="noreferrer"
            >
              repo front
            </a>
            <a
              href="https://github.com/Rey5440/TrendyTech-Back"
              title="ir al repositorio"
              className="LinkRepo"
              target="_blank"
              rel="noreferrer"
            >
              repo back
            </a>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={css3}
            style={{ width: "25px", margin: "7px" }}
            alt="Css3"
          ></img>
          <img
            src={html5}
            style={{ width: "25px", margin: "7px" }}
            alt="html5"
          ></img>
          <img
            src={reactIcon}
            style={{ width: "25px", margin: "7px" }}
            alt="React"
          ></img>
          <img
            src={reduxIcon}
            style={{
              width: "27px",
              margin: "7px",
              borderRadius: "5px",
              backgroundColor: "#341088f3",
            }}
            alt="Redux"
          ></img>
          <img
            src={javascriptIcon}
            style={{ width: "25px", margin: "7px", borderRadius: "4px" }}
            alt="Javascript"
          ></img>
          <img
            src={expressIcon}
            style={{ width: "27px", margin: "7px" }}
            alt="Express"
          ></img>
          <img
            src={nodejsIcon}
            style={{ width: "27px", margin: "7px" }}
            alt="Node.js"
          ></img>
          <img
            src={postgresIcon}
            style={{ width: "25px", margin: "7px" }}
            alt="PostgreSQL"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
