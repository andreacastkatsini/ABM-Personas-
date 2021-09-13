import { Component, OnInit } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
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
  constructor(private personaService: PersonaService) {

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
    this.personaService.deletePerson(Dni).subscribe(response => console.log(response))
    this.getPeopleList();

  }

  onCancel() {

  }

}
