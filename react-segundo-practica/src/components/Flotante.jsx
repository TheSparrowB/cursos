import Cuadrado from "./Cuadrado";
import { PropTypes } from "prop-types";

function Flotante({ ganador, dispararPadre }){

    Flotante.propTypes = {
        ganador: PropTypes.string,
        dispararPadre: PropTypes.func
    };

    function resetearJuego(){
        dispararPadre();
    }


    return (
        <section className='winner'>
            <div className='text'>
            <h2>
                {
                    ganador === "E" ? 'EMPATE' : 'GANO'
                }
            </h2>

            <header className='win'>
                {ganador && <Cuadrado>{ganador}</Cuadrado>}
            </header>

            <footer>
                <button className='button' onClick={resetearJuego}>EMPEZAR DE NUEVO</button>
            </footer>
            </div>
        </section>
    )
}


export default Flotante