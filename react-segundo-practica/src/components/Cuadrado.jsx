import PropTypes from 'prop-types'

function Cuadrado({ children, posicion, dispararPadre, activo }) {
    //console.log(`RENDERIZANDO EL CUADRADO n°${posicion}`)
    const clase = activo ? 'square is-selected' : 'square';

    Cuadrado.propTypes = {
        children: PropTypes.any,
        posicion: PropTypes.number,
        dispararPadre: PropTypes.func,
        activo: PropTypes.bool
    };


    function activarClick() {
        dispararPadre(posicion)
    }


    return (
      <>
        <div className={clase} onClick={activarClick}>
            {children}
        </div>
      </>
    )
  }
  
  export default Cuadrado
  