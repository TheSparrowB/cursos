import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
// import { PropTypes } from 'prop-types';

const TURNOS = {
  X: '❌',
  O: '⚪'
}

// ACÁ EL COMPONENTE CUADRADO RECIBE UNA FUNCIÓN QUE EL PADRE LE MANDA
const Cuadrado = ({ children, isSelected, refrescarTablero, indice }) => {
  const clase = `square ${isSelected ? 'is-selected' : ''}`

  // EN ESTE CASO, EL MÉTODO 'refrescarTablero' ACTIVA EL MÉTODO
  // 'actualizarTablero' DEL PADRE, LO QUE OCASIONA QUE SE CAMBIEN LOS ESTADOS
  const activarClick = () => {
    refrescarTablero(indice)
  }

  return (
    <div onClick={activarClick} className={clase}>
      {children}
    </div>
  )
}

const JUGADAS_GANADORAS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App () {
  const [tablero, cambiarTablero] = useState(() => {
    const tableroLocal = window.localStorage.getItem('tablero')
    return tableroLocal ? JSON.parse(tableroLocal) : Array(9).fill(null)
  })

  const [turno, setearTurno] = useState(() => {
    const turnoLocal = window.localStorage.getItem('turno')

    // EL OPERADOR "||" SIRVE PARA VER SI UN ELEMENTO ES 'falsy', DE SERLO, ME DEVUELVE EL ELEMENTO DE LA DERECHA
    // EL OPERADOR "??" SIRVE PARA VER SI UN ELEMENTO ES NULO O INDEFINIDO, DE SERLO, DEVUELVE EL VALOR DE LA DERECHA
    return turnoLocal || TURNOS.X
  })
  const [ganador, setearGanador] = useState(null)

  const evaluarGanador = (nuevoTablero) => {
    for (const jugada of JUGADAS_GANADORAS) {
      const [a, b, c] = jugada

      if (nuevoTablero[a] &&
        (nuevoTablero[a] === nuevoTablero[b]) &&
        (nuevoTablero[a] === nuevoTablero[c])) {
        return nuevoTablero[a]
      }
    }

    return null
  }

  const chequearTablero = (nuevoTablero) => {
    return nuevoTablero.every((c) => c !== null)
  }

  const actualizarTablero = (indice) => {
    if (tablero[indice] || ganador) return

    // OJITO: UN ELEMENTO DEL ESTADO JAMÁS DEBERÍA DE MODIFICARSE DIRECTAMENTE
    const nuevoTablero = [...tablero]
    nuevoTablero[indice] = turno
    // SIEMPRE QUE SE QUIERA ALTERAR UN ESTADO, HAY QUE HACERLO MEDIANTE SUS MÉTODOS
    cambiarTablero(nuevoTablero)

    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    // IGUALMENTE ACÁ, NO HACEMOS (turno = nuevoTurno) SINO QUE DEBEMOS DE
    // INVOCAR SU MÉTODO RESPONSABLE DEL CAMBIO
    setearTurno(nuevoTurno)

    // PROCEDEMOS A GUARDAR LA PARTIDA
    window.localStorage.setItem('tablero', JSON.stringify(nuevoTablero))
    window.localStorage.setItem('turno', nuevoTurno)

    // EVALUAMOS SI HAY UN GANADOR
    // LE MANDAMOS EL NUEVO TABLERO YA QUE ES PROBABLE QUE EL TABLERO
    // ORIGINAL AÚN NO SE HAYA ACTUALIZADO DEBIDO A QUE SU ACTUALIZACIÓN
    // ES ASÍNCRONA
    const nuevoGanador = evaluarGanador(nuevoTablero)
    if (nuevoGanador) {
      confetti()
      setearGanador(nuevoGanador)
    } else if (chequearTablero(nuevoTablero)) {
      setearGanador(false)
    }
  }

  const resetearJuego = () => {
    cambiarTablero(Array(9).fill(null))
    setearTurno(TURNOS.X)
    setearGanador(null)

    window.localStorage.removeItem('tablero')
    window.localStorage.removeItem('turno')
  }

  return (
    <>
      <main className='board'>
        <h1>Tic tac toe</h1>

        <section className='turn'>
          <button onClick={resetearJuego}>Resetear Juego</button>
        </section>

        <section className='game'>
          {
          tablero.map((_, index) => {
            return (
              <Cuadrado
                key={index}
                indice={index}
                refrescarTablero={actualizarTablero}
              >
                {_}
              </Cuadrado>
            )
          })
        }
        </section>

        <section className='turn'>
          <Cuadrado isSelected={turno === TURNOS.X}>
            {TURNOS.X}
          </Cuadrado>
          <Cuadrado isSelected={turno === TURNOS.O}>
            {TURNOS.O}
          </Cuadrado>
        </section>

        {
        ganador !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  ganador === false ? 'Empate' : 'Ganó'
                }
              </h2>

              <header className='win'>
                {ganador && <Cuadrado>{ganador}</Cuadrado>}
              </header>

              <footer>
                <button onClick={resetearJuego}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
      </main>

    </>
  )
}

export default App
