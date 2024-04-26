import { useState } from 'react'
import Cuadrado from './components/Cuadrado';
import { TURNOS, GANADORAS } from './utils/constantes';
import './App.css'
import Flotante from './components/Flotante';

function App() {
  //LAS FUNCIONES DE ESTE COMPONENTE SIEMPRE SERÁN LLAMADAS, PERO LOS 'useState' SE INICIAN SOLO UNA VEZ
  //console.log("RENDERIZANDO LA MATRIZ")
  const [matriz, setMatriz] = useState(() => {
    const matrizLocal = window.localStorage.getItem("matriz");
    return JSON.parse(matrizLocal) || new Array(9).fill(null);
  });
  const [turno, setTurno] = useState(() => {
      const turnoLocal = window.localStorage.getItem('turno');
    return turnoLocal || TURNOS.X;
  });
  const [ganador, setGanador] = useState(null);


  //FUNCIÓN PARA CAMBIAR UN TURNO
  function cambiarTurno(posicion){
    if(matriz[posicion] || ganador) return

    const nuevaMatriz = [...matriz];
    nuevaMatriz[posicion] = turno;

    const nuevoTurno = turno == TURNOS.X ? TURNOS.O : TURNOS.X;
    
    setMatriz(nuevaMatriz);
    evaluarGanador(nuevaMatriz, turno);
    setTurno(nuevoTurno);
    gestionarPartida(nuevaMatriz, nuevoTurno, "G");
  }



  function gestionarPartida(matriz, turno, accion){
    if(accion == "G"){
      window.localStorage.setItem("matriz", JSON.stringify(matriz))
      window.localStorage.setItem("turno", turno)
    }
    else if(accion == "E"){
      window.localStorage.removeItem("matriz")
      window.localStorage.removeItem("turno")
    }
  }


  function evaluarGanador(nuevaMatriz, turno){
    for(let g of GANADORAS){
      if(nuevaMatriz[g[0]] && (nuevaMatriz[g[0]] == nuevaMatriz[g[1]]) && (nuevaMatriz[g[1]] == nuevaMatriz[g[2]])){
        setGanador(turno);
      }
    }

    //SI TODAS LAS CELDAS CONTIENEN VALORES NO NULOS, ENTONCES PROCEDEMOS A DECLARAR EMPATE
    if(nuevaMatriz.every((c) => { return c != null })){
      setGanador("E");
    }
  }


  function resetearJuego(){
    setMatriz(new Array(9).fill(null));
    setTurno(TURNOS.X);
    setGanador(null);

    gestionarPartida(null, null, "E");
  }


  return (
    <>

      <div className='board'>
        <div>
          <button className='button' onClick={resetearJuego}>REINICIAR</button>
        </div>

        <div className='board game'>
          {
            matriz.map((cuadrado, index) => {
              return (
                <Cuadrado 
                  key={index}
                  posicion={index}
                  dispararPadre={cambiarTurno}>
                    {cuadrado}
                </Cuadrado>
              )
            })
          }
        </div>


        <section className='turn'>
          <Cuadrado activo={turno === TURNOS.X}>
            {TURNOS.X}
          </Cuadrado>
          <Cuadrado activo={turno === TURNOS.O}>
            {TURNOS.O}
          </Cuadrado>
        </section>


        {
          ganador !== null ? (
            <Flotante 
              ganador={ganador}
              dispararPadre={resetearJuego}></Flotante>
          ) : (null)
        }

      </div>
    </>
  )
}

export default App
