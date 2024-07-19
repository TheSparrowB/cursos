import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JuegoDetalleComponent } from '../juego-detalle/juego-detalle.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [JuegoDetalleComponent, CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

  @Input() txtJugador = "";
  @Output() favoritoEvent = new EventEmitter<string>();
  juegoSeleccionado: any = null;

  listaJuego = [
    { id: 1, name: "Dunes Rebelion", image: "girl_desert.jpg" },
    { id: 2, name: "Forces against Evil", image: "cat_agent.jpg" },
    { id: 3, name: "Succulent Party", image: "monkey_garden.jpg" },
    { id: 4, name: "Highway from Hell", image: "dog_motorbike.jpg" }
  ];


  guardarFavorito(id: number){
    let encontrado = this.listaJuego.find(J => J.id == id);
    this.favoritoEvent.emit(encontrado?.name);
  }

  seleccionarJuego(juego: any){
    this.juegoSeleccionado = juego;
  }
}
