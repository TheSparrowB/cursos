import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JuegoComponent } from '../juego/juego.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, JuegoComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  txtUsuario = "Bryan";
  isLogeado = false;
  txtSesion = "INICIAR SESION";
  txtFavorito = "";


  gestionarSesion(){
    this.isLogeado = !this.isLogeado;
    
    if(this.isLogeado){
      this.txtSesion = "CERRAR SESION";
    }
    else{
      this.txtSesion = "INICIAR SESION";
    }
  }



  anunciarFavorito(nombre: string){
    this.txtFavorito = nombre;
  }
}
