import { Component, OnInit } from '@angular/core';
import { Cantante } from 'src/app/modex/cantante.model';

@Component({
  selector: 'cantantes',
  templateUrl: './cantantes.component.html',
  styleUrls: ['./cantantes.component.css']
})
export class CantantesComponent implements OnInit {
  
  inputNombre:string="";
  inputEdad:number=0;
  inputVivo:boolean=false;

  
  cantantes:Cantante[] = [
    {
      nombre:"Roberto Musso",
      edad:60,
      vivo:true,
    },
    {
      nombre:"Juan Esteban Aristizábal Vásquez",
      edad:50,
      vivo:true,
    },
    {
      nombre:"Natalia Peluso",
      edad:28,
      vivo:true,
    },
    {
      nombre:"Santiago Tavella Nazzari",
      edad:61,
      vivo:true,
    },
    {
      nombre:"Damon Albarn",
      edad:55,
      vivo:true,
    },
    {
      nombre:"Andrés Cepeda",
      edad:49,
      vivo:true,
    },
    {
      nombre:"Julieta Venegas Percevault",
      edad:52,
      vivo:true,
    },
    {
      nombre:"Álvaro Gonzalo López Parra",
      edad:43,
      vivo:true,
    },
    {
      nombre:"Stanley Bert Eisen",
      edad:71,
      vivo:true,
    },
    {
      nombre:"David Robert Jones",
      edad:69,
      vivo:false,
    },
  ];
  ngOnInit(): void {
    console.log("hola")
    console.log(this.cantantes[0].nombre);
    console.log(this.cantantes[0].nombre.length);
    console.log(this.cantantes[0].nombre.charAt(1));
    console.log(this.cantantes[0].nombre.substring(1,4));
    console.log(this.cantantes[0].nombre.replace("Roberto","Rodrigo"));
    console.log(this.cantantes[0].nombre.toUpperCase());
    console.log(this.cantantes[0].nombre.concat(" sanchez"));
    console.log(this.cantantes[0].nombre.indexOf("Musso"));
    console.log(this.cantantes[0].nombre.includes("Musso"));
    console.log(this.cantantes[0].nombre.startsWith("Rob"));
    console.log(this.cantantes[0]);
    console.table(this.cantantes[2]);
    console.log(this.cantantes.length);
    this.cantantes.pop(); //elimina el ultimo elemento//
   
    this.cantantes.shift();//elimina el primer elemento//
    this.cantantes.splice(2,1)//elimina desde el numero del primer digito, la cantidad del segundo digito//
    let nuevoCantante:Cantante={
      nombre:"Juan Luis Guerra Seijas",
      edad:65,
      vivo:true,
    }//mete un nuevo objeto//
    this.cantantes.push(nuevoCantante)
    
    console.log(this.cantantes);
    let nombres=this.cantantes.map(cantante => cantante.nombre.toUpperCase()).sort().reverse();//sort organiza de manera automatica alfabedicamente//
    let sumas=this.cantantes.map(cantante => cantante.edad+2)
    let raizes=this.cantantes.map(cantante => Math.sqrt(cantante.edad))
    let potencia=this.cantantes.map(cantante => Math.pow(cantante.edad,2))
    console.log(nombres);
    console.log(sumas) 
    console.log(raizes) 
    console.log(potencia)
  }
  agregarCantante(){
    console.log("funcion click");
    let nuevoCantante:Cantante={
      nombre:this.inputNombre,
      edad:this.inputEdad,
      vivo:this.inputVivo,
    
    }
    this.cantantes.push(nuevoCantante);
    this.reset();
  }
 
  
  reset(){
    this.inputNombre="";
    this.inputEdad=0;
    this.inputVivo=false;

  }

}
