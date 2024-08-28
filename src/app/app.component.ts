import { Component, OnInit } from '@angular/core';

// Importamos la interfaz 'datos'
import { Datos } from './datos';

// Importamos el servicio 'datos'
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  
  datos: Datos[] = []; // Variable datos
  titulo: any; // Tipo para la variable titulo


  // Declaramos el servicio 'DatosService' como privado en el constructor
  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    
    // Accedemos a los datos usando el servicio 'DatosService' 
    this.datosService.getDatos().subscribe((datos) => {
    this.datos = datos;
    console.log(datos); // Mostramos los datos en la consola

  });

  // Variable titulo
  this.titulo = 'Cómo Leer Una API con Angular 18';

  }

}
