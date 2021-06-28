import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  constructor(private personaService:PersonasService) 
  { 
    this.formulario= new FormGroup({
      nombre: new FormControl('David'),
      apellidos: new FormControl('Campos Castro'),
      empresa: new FormControl('Empresa A'),
      telefono: new FormControl('8888-8888'),
      email: new FormControl('email@gmail.com'),
    });    
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.personaService.agregarPersona(this.formulario.value);
  }

}
