import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-hot-cold',
  standalone: true,
  imports: [],
  templateUrl: './hot-cold.component.html',
  styleUrl: './hot-cold.component.css'
})
export class HotColdComponent {

  urlConsulta = `${environment.backendServicio}mascota/coneja/listar`;
  
  //EL SÍMBOLO "!" ESPECIFICA AL COMPILADOR QUE LA VARIABLE NO SERÁ NULA, ES DECIR, SI BIEN
  //SE DECLARA SIN UN VALOR, SE LE ASIGNARÁ UNO INMEDIATAMENTE
  conejas!: Observable<any>;
  private http = inject(HttpClient);

  
  listarConejas(){
    this.conejas = this.http.get(this.urlConsulta);
  }
}
