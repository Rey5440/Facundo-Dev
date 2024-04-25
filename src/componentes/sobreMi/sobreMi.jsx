import React, { useEffect, useState } from 'react';
import IMG from '../../imagenes/imageWspp.png';
import './sobreMi.css';

const SobreMi = () => {
    const [letterState, setLetterState] = useState('');
    const [startAnimate, setStartAnimate] = useState(false)

    setTimeout(() => {
        setStartAnimate(true)
    }, 1000)

    useEffect(() => {
        if (startAnimate) {
            let cont = 0;
            const interval = setInterval(() => {
                setLetterState(`letter${cont + 1}`);
                cont++;
                if (cont === 9) {
                    clearInterval(interval); // Detiene la animación después de llegar a la última letra
                }
            }, 200);

            // Limpia el intervalo cuando el componente se desmonta
            return () => clearInterval(interval);
        }
    }, [startAnimate]); // Se ejecuta solo una vez al montar el componente

    return (
        <div className='AboutCont'>
            <div className='CardAbout'>
                <br></br>
                <div className='TitleandImage'>
                    <div className='Title&Sub'>
                        <div className='Fullstack'>
                            <h1 className={letterState === 'letter1' ? 'LetterAnimated' : 'Letter'}>F</h1>
                            <h1 className={letterState === 'letter2' ? 'LetterAnimated' : 'Letter'}>u</h1>
                            <h1 className={letterState === 'letter3' ? 'LetterAnimated' : 'Letter'}>l</h1>
                            <h1 className={letterState === 'letter4' ? 'LetterAnimated' : 'Letter'}>l</h1>
                            <h1 className={letterState === 'letter5' ? 'LetterAnimated' : 'Letter'}>s</h1>
                            <h1 className={letterState === 'letter6' ? 'LetterAnimated' : 'Letter'}>t</h1>
                            <h1 className={letterState === 'letter7' ? 'LetterAnimated' : 'Letter'}>a</h1>
                            <h1 className={letterState === 'letter8' ? 'LetterAnimated' : 'Letter'}>c</h1>
                            <h1 className={letterState === 'letter9' ? 'LetterAnimated' : 'Letter'}>k</h1>
                        </div>
                        <h1 className='Webdeveloper'>
                            Web Developer
                        </h1>
                    </div>
                    <div className="ImageContainer" >
                        <div className="ImageBackground"></div>
                        <img src={IMG} alt="FacundoFernandez" className="ImageFac" />
                    </div>
                </div>
                <br></br>
                <h4 className='AboutText' >
                    ¡Hola! Soy Facundo, un apasionado programador con una sólida experiencia en el desarrollo de aplicaciones web. Descubrí mi pasión por la programación hace poco menos de un año y desde entonces, cada logro alcanzado en el mundo del código se convierte en una fuente de satisfacción y alegría para mí.
                </h4>
                <br></br>
                <h4 className='AboutText' >
                    Mis habilidades técnicas abarcan un amplio espectro, desde el diseño de interfaces de usuario hasta la configuración de servidores y bases de datos.
                </h4>
                <br></br>
                <h4 className='AboutText'>
                    He tenido el privilegio de trabajar en proyectos emocionantes y desafiantes, incluyendo la creación de dos plataformas de comercio electrónico en equipo, donde pude aplicar mis habilidades en el desarrollo frontend y backend. Además, junto a un amigo, desarrollamos una innovadora página web para la reserva de turnos en peluquerías, un proyecto que destaca por su lógica sólida y su potencial en el mercado.
                </h4>
                <br></br>
                <h4 className='AboutText'>
                    Mi meta es seguir creciendo y profundizando mis conocimientos en el mundo de la programación, y anhelo formar parte de un equipo dinámico y colaborativo donde pueda seguir aprendiendo y contribuyendo con mi experiencia.
                </h4>
                <br></br>
                <h4 className='AboutText'>
                    ¡Estoy emocionado por lo que el futuro me depara en este apasionante viaje como desarrollador de software!
                </h4>
            </div>
        </div>
    );
};

export default SobreMi;
