import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url= 'assets/people.json';

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  savePerson(person: Person): Observable<any> {
    return this.http.post(this.url, person,{ observe: 'response' });
  }

  deletePerson(dni: number){
    // const index = this.person.findIndex(x=> x.Dni=== dni);
    // if(index !== -1){
    //   this.person.splice(index,1);
    //}
  }

  editPerson(person: Person): Observable<any> {
    return this.http.put(this.url, person,{ observe: 'response' });
  }

  getSpecificPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }


}
