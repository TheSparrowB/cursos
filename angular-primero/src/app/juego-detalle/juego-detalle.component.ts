import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-juego-detalle',
  standalone: true,
  imports: [],
  templateUrl: './juego-detalle.component.html',
  styleUrl: './juego-detalle.component.css'
})
export class JuegoDetalleComponent {

  @Input() parametro: any;


}
