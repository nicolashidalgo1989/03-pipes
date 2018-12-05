import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'capitalizado'

})

export class CapitalizadoPipe implements PipeTransform {

  transform( value:string, todas:boolean = true ): string {

    value = value.toLowerCase();
    
    let nombres = value.split(' ');

    if(!todas){

      nombres[0] = nombres[0].slice(0,1).toUpperCase() + nombres[0].substr(1);

    } else {

      for ( let i in nombres ) {

        nombres[i] = nombres[i].slice(0,1).toUpperCase() + nombres[i].substr(1);
      
      }
 
    }

    return nombres.join(' ');

  }

}
