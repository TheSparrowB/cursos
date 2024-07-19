import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  
  fumadas = 3;

  constructor(){
    console.log("Estoy naciendo.");
  }


  //ESTA FUNCION SE EJECUTA INMEDIATAMENTE LUEGO DE QUE EL COMPONENTE SE HAYA CREADO
  ngOnInit(): void {
    console.log("Ya nací lmao!!!");
  }



  fumarMota(){
    this.fumadas++;
  }


}
