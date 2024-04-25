import "./nav.css";

const Nav = ({ selected, handleSelected }) => {
  return (
    <div className="NavCont">
      <div>
        <h5 className="Navlogo">{`{ Facundo Dev }`}</h5>
      </div>
      <div className="NavsubCont">
        <button
          className={
            selected === "Sobre Mí"
              ? "NavButton selected"
              : "NavButton unSelected"
          }
          onClick={() => handleSelected("Sobre Mí")}
        >
          Sobre Mí
        </button>
        <button
          className={
            selected === "Proyectos"
              ? "NavButton selected"
              : "NavButton unSelected"
          }
          onClick={() => handleSelected("Proyectos")}
        >
          Proyectos
        </button>
      </div>
    </div>
  );
};

export default Nav;
