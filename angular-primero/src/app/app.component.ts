import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  //LOS COMPONENTES STANDALONE NO NECESITAN SER DECLARADOS EN UN MÓDULO Y PUEDES IMPORTAR
  //TODO LO QUE QUIERAS AQUÍ MISMO
  standalone: true,
  imports: [RouterOutlet, CommonModule, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  listaMensaje = [
    "Este goldfish HDP saltó de la pecera como un toro, ¡Y SIN PASTILLAS!",
    "Este goldfish HDP se ha quedado dentro de su pecera, ¡TODO GORDO, TODO HUEVÓN!"
  ]
  flgGoldfish = false;
  txtGoldfish = "";

  constructor(){
    this.txtGoldfish = this.listaMensaje[1];
  }

  cambiarEstado(){
    this.flgGoldfish = !this.flgGoldfish;
    this.txtGoldfish = this.flgGoldfish ? this.listaMensaje[0] : this.listaMensaje[1];
  }
}
