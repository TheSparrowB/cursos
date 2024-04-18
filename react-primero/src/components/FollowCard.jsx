// IMPORTAMOS UN "HOOK" => PERMITEN AÑADIR FUNCIONALIDAD A LOS COMPONENTES DE REACT
import { useState } from 'react';
import { PropTypes } from "prop-types";

// EN ESTA PARTE DEFINIMOS LOS TIPOS DE LAS VARIABLES QUE EL COMPONENTE NECESITA
FollowCard.propTypes = {
    formateo: PropTypes.func,
    usuario: PropTypes.string,
    initialEstaSiguiendo: PropTypes.bool,
    nombre: PropTypes.string,
    rutaImagen: PropTypes.string,
    roto: PropTypes.bool
};

export function FollowCard({ formateo, usuario, initialEstaSiguiendo, nombre, rutaImagen, roto }) {
    console.log(`INICIALIZANDO CARTILLA DEL USUARIO: ${usuario}`);

    // ACÁ UTILIZO "CONST" DEBIDO A QUE YO NO VOY A MANIPULAR ESTA VARIABLE DIRECTAMENTE
    const [estaSiguiendo, setearSeguimiento] = useState(initialEstaSiguiendo);

    const handleClick = () => {
        setearSeguimiento(!estaSiguiendo);
    }

    const textoCosho = estaSiguiendo ? "Coshando" : "Coshar";
    const buttonClassName = estaSiguiendo ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    const potoRoto = roto ? (<span className='textoRojo'>⬤</span>) : null;

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Riko" src={rutaImagen}></img>
                <div className='tw-followCard-info'>
                    <strong>{nombre}</strong>
                    <span className='tw-followCard-infoUserName'>{formateo(usuario)} {potoRoto}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{textoCosho}</span>
                    <span className='tw-followCard-stopFollow'>Cumear Dentro</span>
                </button>
            </aside>
        </article>
    )
}