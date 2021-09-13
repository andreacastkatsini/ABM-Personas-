import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Person } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.scss']
})
export class AltaComponent implements OnInit {

  peopleDataForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private personaService: PersonaService) {

  }

  ngOnInit(): void {
    this.setPersonFormGroup();
  }

  setPersonFormGroup() {
    this.peopleDataForm = this.formBuilder.group({
      dni: [null, Validators.required],
      name: [null, Validators.required],
      surname: [null, Validators.required],
      address: [null],
      mobile: [null]
    });
  }

  saveForm() {
    const people: Person = {
      id: 2,
      Dni: this.peopleDataForm.get('dni')?.value,
      Name: this.peopleDataForm.get('name')?.value,
      Surname: this.peopleDataForm.get('surname')?.value,
      Address: this.peopleDataForm.get('address')?.value,
      Mobile: this.peopleDataForm.get('mobile')?.value,
    }

    this.personaService.createPerson(people).subscribe(response => {
      console.log(response);
    });
    this.peopleDataForm.reset('');
  }

}
