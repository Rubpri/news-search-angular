import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>;

  categoriaSeleccionada = "general"
  paisSeleccionado = 'de';

  categorias: any[] = [
    {
      value: 'general',
      nombre: 'General'
    },
    {
      value: 'business',
      nombre: 'Negocios'
    },
    {
      value: 'science',
      nombre: 'Ciencia'
    },
    {
      value: 'sports',
      nombre: 'Deportes'
    },
    {
      value: 'technology',
      nombre: 'Tecnología'
    },
    
  ]

  paises: any[] = [
    {
      value: 'de',
      nombre: 'Alemania'
    },
    {
      value: 'ar',
      nombre: 'Argentina'
    },
    {
      value: 'mx',
      nombre: 'México'
    },
    {
      value: 'gb',
      nombre: 'Reino Unido'
    },
  ]

  buscarNoticia() {
    // console.log(this.categoriaSeleccionada)
    // console.log(this.paisSeleccionado)
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
