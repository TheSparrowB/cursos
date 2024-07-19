import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-normal',
  standalone: true,
  imports: [],
  templateUrl: './normal.component.html',
  styleUrl: './normal.component.css'
})
export class NormalComponent implements OnInit, OnDestroy{

  //ESTE ES UN OBSERVABLE "NORMAL"
  observable = new Observable((s) => {
    s.next(1);
    s.next(2);
    s.next(3);
    s.next(new Error("Fire fire, bitch bitch"));
    s.next(4);

    //CON ESTE MÉTODO SEACTIVA EL COMPURITO
    //s.complete();
  });

  observador!: Subscription;


  ngOnInit(): void {
    this.ejecutarObservable();
  }

  ngOnDestroy(): void {
    //PROCEDEMOS A DESUSCRIBIRNOS DEL OBSERVABLE
    console.log("Destruyendo observadores.");
    this.observador.unsubscribe();
  }


  ejecutarObservable(){
    this.observador = this.observable.subscribe({
      next: (r)=> {
        console.log(r)
      },
      error: (e)=> {
        console.log(e)
      },
      complete: ()=> {
        console.log("Completadous");
      }
    });
  }

}
