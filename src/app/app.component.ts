import { Component } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   nombre: string = 'Capitán América';
   nombre2: string = 'jeSuS mAnUeL lOrEdO sAUcEda';
   personajes: string[] = ['Iroman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
   PI: number = Math.PI;
   porcentaje: number = .2199;
   salario: number = 1234.5;
  fecha: Date = new Date();
  idioma: string;
  videoUrl: string = 'https://www.youtube.com/embed/hpBBvzrtr60';
  activar: boolean = true;
  valorPromesa = new Promise<string>( ( resolve ) => {
      setTimeout(() => {
        resolve('llego la data');
      }, 4500);
  });

   heroe =  {
nombre : 'Logan',
clave: 'Wolverine',
edad: 500,
direccion: {
  calle: 'Principal',
casa: 20,
}
   };
}
