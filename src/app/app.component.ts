import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  nombre = "Nicolas";

  nombre2 = 'nicOlas jaVier hiDAlgo caVIERres';

  arreglo = [1,2,3,4,5,6,7,8,9];

  pi = Math.PI;

  numero = 0.234;

  salario  = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 19
    }
  }

  valordepromesa = new Promise( (resolve, reject)=>{

    setTimeout( () => resolve ( 'llego la data' ), 3500 );

  })

  fecha = new Date();

  video = '16rQyEQtpyQ';

  activar:boolean = true;

}
