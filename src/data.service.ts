import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    let people = [
      {
        Id: 1,
        Dni: 31456357,
        Name: "Juana",
        Surname: "Perez"
      }
    ];
    return {people};
  }
}
