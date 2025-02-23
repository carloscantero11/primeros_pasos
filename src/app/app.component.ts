import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideojuegoComponent } from '../videojuego/videojuego.component';
import { ZapatillasComponent } from '../zapatillas/zapatillas.component';
import { CursosComponent } from "../cursos/cursos.component";
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { Configuracion } from '../models/configuracion';

// Decorador que define el componente AppComponent
@Component({
  selector: 'app-root', // Selector para usar en el HTML
  standalone: true,  // Indica que el componente es independiente (standalone)
  imports: [RouterOutlet, VideojuegoComponent, ZapatillasComponent, CursosComponent, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // Propiedades del componente
  public title = 'Hola Mundo';
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;

  constructor () {
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  // Método para ocultar la sección de videojuegos
  ocultarVideojuegos () {
    this.mostrar_videojuegos = false;
  }

  // Método para mostrar la sección de videojuegos
  mostrarVideojuegos () {
    this.mostrar_videojuegos = true;
  }
}
