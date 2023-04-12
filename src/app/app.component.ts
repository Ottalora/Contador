import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'PocketKey';
  edad:number = 20 ;
  pasaLaMateria:boolean = true ;
  contador:number = 0 ;
  aumentar(){
    this.contador = this.contador + 1 ;
  }
  reducir(){
    this.contador = this.contador - 1 ;
  }
  multiplicar(){
    this.contador = this.contador * 2;
  }
  dividir(){
    this.contador = this.contador / 2;
  }
  reset(){
    this.contador = this.contador = 0;
  }
  esPar(numero:number): boolean{
    if(numero % 2 === 0){
      return true;
    } else {
      return false;
    }
  }
  estudiantes:string[]=["Alejandro","Romario","Daniela","Lady","Walter","Luisa","Natalia"]
  
}
