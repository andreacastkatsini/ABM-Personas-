import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  person: Person[] = [];
  headers: string[] = [
    'Dni',
    'Nombre',
    'Apellido',
    'Dirección',
    'Telefono',
  ]

  popConfirmTitle = 'Esta seguro que desea eliminar esta persona?'
  constructor(private personaService: PersonaService, private router: Router) {

  }

  ngOnInit() {
    this.getPeopleList();
  }

  getPeopleList() {
    this.personaService.getPerson().subscribe(people => {
      this.person = people;
    });

  }

  onConfirm(Dni: number) {
    //Eliminar Person
    // this.personaService.deletePerson(Dni).subscribe(response => console.log(response))
    // this.getPeopleList();
    console.log('La persona que se va a eliminar tiene DNI nro:', Dni);

  }

  onCancel() {

  }

  navigate(data:any){
    this.router.navigate(['/alta'],{queryParams: {...data}});
  }



}
