import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    if(!activar){  
    
      return value;
    
    } else {

      let letras = value.split('');
      
      for(let i in letras){
    
        letras[i] = '*';
    
      }
      
      return letras.join('');
    
    }

  }

}
