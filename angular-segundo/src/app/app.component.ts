import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

import { NormalComponent } from './components/observables/normal/normal.component';
import { HotColdComponent } from './components/observables/hot-cold/hot-cold.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent,
    NormalComponent, HotColdComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  componentes: any = {
    normal: false,
    hotcold: false
  };

  ngOnInit(): void {
  }


  cambiarObservable(letra: string){
    //PRIMERO SETEAREMOS TODOS LOS VALORES DE LOS COMPONENTES COMO FALSE
    for(let a in this.componentes){
      this.componentes[a] = false;
    }

    //AHORA, DE ACUERDO A LA LETRA, CAMBIAREMOS EL VALOR A TRUE
    switch(letra){
      case "N": this.componentes["normal"] = true; break;
      case "H": this.componentes["hotcold"] = true; break;
      default: console.log("Nada que hacer");
    }
  }



}
