import { Component, OnInit } from '@angular/core';
import { Persona, PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaPersonas: Persona[];
  cabeceras: string[] = ["Nombre", "Apellidos", "Empresas", "Email", "Telefono"];
  constructor(private personaService: PersonasService) {
    this.listaPersonas = new Array();
  }

  ngOnInit(): void {
    this.personaService.getPersonas$().subscribe(data => {
      this.listaPersonas = data;
    });
  }

}
