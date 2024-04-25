import { useEffect, useState } from "react";
import "./footer.css";
import iconWhatsApp from "../../imagenes/whatsapp.png";
import iconLinkedIn from "../../imagenes/linkedin.png";
import iconGmail from "../../imagenes/gmail.png";
import iconCV from "../../imagenes/Curriculum.png"
import CVFacundo from "../../download/CVFacundo.pdf"

const Footer = () => {
  const [navigationBarHeight, setNavigationBarHeight] = useState(0);

  useEffect(() => {
    const calculateNavigationBarHeight = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;
      const barHeight = windowHeight - (documentHeight + 70);
      setNavigationBarHeight(barHeight);
    };
    calculateNavigationBarHeight();
  }, []);
  console.log(navigationBarHeight);
  return (
    <div
      style={{
        position: "fixed",
        top: "calc(100% - 75px)",
        left: "calc(50% - 130px)",
      }}
    >
      <div className="FooterSubCont">
        <a href="https://wa.me/2983664119?text=Hola%20Facundo%20Gabriel,%20vi%20tu%20portafolio." target="_blank" rel="noopener noreferrer">
          <img src={iconWhatsApp} alt="WhatsApp" className="iconFooter" />
        </a>
        <a href={CVFacundo} download="CVFacundo" >
          <img src={iconCV} alt="" className="iconFooter" />
        </a>
        <a href="https://www.linkedin.com/in/facundo-fernandez-19369926a/" target="_blank" rel="noopener noreferrer">
          <img src={iconLinkedIn} alt="" className="iconFooter" />
        </a>
        <a href="mailto:hellsingsd@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={iconGmail} alt="" className="iconFooter" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
