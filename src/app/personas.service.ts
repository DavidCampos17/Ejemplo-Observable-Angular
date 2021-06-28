import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Persona
{
  nombre: string;
  apellidos:string;
  empresa:string;
  email:string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private personas: Persona[];
  /* Subject: Nos permite notificar a los subscriptores el cambio y que se enteren que algo a pasado.
   */
  private personas$: Subject<Persona[]> // Inicializamos el subject, de la librería rxjs
  constructor() 
  { 
    this.personas=[];
    this.personas$ = new Subject();
  }

  agregarPersona(persona:Persona)
  {
    this.personas$.next(this.personas); 
    /*
    Con Next pasammos a los subscriptores la actualización de que se agregó 
    una persona al array y les pasamos el array.
    */
    this.personas.push(persona);
  }

  /*Nos devuelve el observable al que los subscriptores se suscriben, esto lo 
  hacemos porque la interfaz es privada.
  Le indicamos que nos devuelve un array de personas  */
  getPersonas$():Observable<Persona[]>
  {
    /* Se convierte a asObservable para que desde el exterior los subscriptores puedan 
    suscribirse a él.
    */
    return this.personas$.asObservable(); 
  }
}
