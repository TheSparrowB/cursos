import './App.css'
import { FollowCard } from './components/FollowCard'
import { useState } from 'react'

export function App () {
  console.log('INICIALIZANDO EL APP')

  // DEFINIMOS UNA FUNCIÓN PARA PASARLA COMO PARÁMETRO
  const formatearUsuario = (usuario) => `@${usuario}`

  const usuarios = [
    {
      id: 1,
      usuario: 'cocobitch',
      nombre: 'Coco Bandicoot',
      estaSiguiendo: true,
      formateo: formatearUsuario,
      rutaImagen: 'https://i.imgur.com/FREZlLH.jpg'
    },
    {
      id: 2,
      usuario: 'isabella',
      nombre: 'Isabelita del Japón',
      estaSiguiendo: false,
      formateo: formatearUsuario,
      rutaImagen: 'https://i.imgur.com/xZCAP3x.jpg'
    },
    {
      id: 3,
      usuario: 'rikoyummy',
      nombre: "Riko's Tastes",
      estaSiguiendo: true,
      formateo: formatearUsuario,
      rutaImagen: 'https://i.imgur.com/b5u5jVc.jpg'
    }

  ]

  const hunter = { id: 4, formateo: formatearUsuario, usuario: 'xxhunter', nombre: 'The Master Hunter', initialEstaSiguiendo: false, rutaImagen: 'https://i.imgur.com/JqFDtHz.png' }
  const chinchilla = { id: 5, formateo: formatearUsuario, usuario: 'peruslangz', nombre: 'Chinchilla Warrior', rutaImagen: 'https://i.imgur.com/K7FDOUo.jpg' }
  const tootie = { id: 6, formateo: formatearUsuario, usuario: 'tootiehot', nombre: 'Tootie the Devourer', rutaImagen: 'https://i.imgur.com/zhBaVZW.jpeg' }

  // ESTO ES INTERESANTE, YA QUE CAMBIAREMOS EL ESTADO DE APP PARA PODER CAMBIAR UN PARAMETRO A LOS HIJOS
  const [estado, cambioEstado] = useState(false)
  const [antiTootie, joderTootie] = useState(false)
  const [flgOlivia, joderOlivia] = useState(false)

  // SIN EMBARGO, EL ESTADO DEL COMPONENTE (FollowCard) DEL CAZADOR NO CAMBIA DEBIDO A QUE NO HA RECIBIDO EL ESTADO DEL "App" COMO BINDING
  const empezarFollasion = () => {
    cambioEstado(true)
  }

  const deshacerFolasion = () => {
    cambioEstado(false)
  }

  // COMO NO PUDIMOS JODER AL CAZADOR NI A OLIVIA, ENTONCES NOS DESQUITAREMOS CON EL HOYO DE TOOTIE
  // COMO VEMOS, NO SE PUEDE UTILIZAR EL ESTADO DEL PADRE PARA PODER CAMBIAR EL ESTADO INICIAL DE LOS HIJOS
  // LO QUE SIGNIFICA QUE TOOTIE ES DOBLEMENTE INFOLLABLE
  const follarTootie = () => {
    joderTootie(!antiTootie)
  }

  // CON OLIVIA VEMOS ALGO INTERESANTE, ES QUE AL MOMENTO DE FOLLARLA SOLO PODEMOS ROMPERLE EL POTO,
  // PERO NO PODREMOS ALTERAR SU ESTADO INICIAL
  const follarOlivia = () => {
    joderOlivia(!flgOlivia)
  }

  return (
  // EN VEZ DE COLOCAR "React.Fragment" DENTRO DE "<>", ENTONCES SOLO COLOCAMOS "<>"
    <>
      <section className='app'>
        {
                    usuarios.map(u => {
                      return (
                      // AVISO: ES RECOMENDABLE AGREGARLE UN VALOR "KEY" A CADA COMPONENTE
                        <FollowCard
                          key={u.id}
                          formateo={u.formateo}
                          usuario={u.usuario}
                          nombre={u.nombre}
                          initialEstaSiguiendo={u.estaSiguiendo}
                          rutaImagen={u.rutaImagen}
                          roto={estado}
                        />
                      )
                    })
                }

        {/* TAMBIEN SE PODRÍA PASAR UN OBJETO ENTERO A UN COMPONENTE DE ESTA FORMA */}
        {/* SIN EMBARGO, NO ES RECOMENDABLE */}
        <FollowCard {...hunter} />

        <FollowCard
          key={chinchilla.id}
          formateo={chinchilla.formateo}
          usuario={chinchilla.usuario}
          nombre={chinchilla.nombre}
          rutaImagen={chinchilla.rutaImagen}
          roto={estado}
        />

        <FollowCard
          key={tootie.id}
          formateo={tootie.formateo}
          usuario={tootie.usuario}
          nombre={tootie.nombre}
          initialEstaSiguiendo={antiTootie}
          rutaImagen={tootie.rutaImagen}
          roto={estado}
        />

        {/* PARA EL CASO DE OLIVIA, HEMOS ASIGNADO EL VALOR "flgOlivia" TANTO PARA SU ESTADO INICIAL COMO PARA LA ROTURA DE SU POTO */}
        <FollowCard
          key={7}
          formateo={formatearUsuario}
          usuario='oliviamed'
          nombre='Olivia LMAO'
          initialEstaSiguiendo={flgOlivia}
          rutaImagen='https://i.imgur.com/hO8mcOm.jpeg'
          roto={flgOlivia}
        />

        <br />
        <br />
        <button className='tw-followCard-button' onClick={empezarFollasion}>FOLLARLOS A TODOS</button>
        <button className='tw-followCard-button' onClick={deshacerFolasion}>CURAR PAN FRANCES</button>
        <br />
        <button className='tw-followCard-button' onClick={follarTootie}>FOLLAR A TOOTIE</button>
        <button className='tw-followCard-button' onClick={follarOlivia}>FOLLAR A OLIVIA</button>
      </section>
    </>

  )
}
