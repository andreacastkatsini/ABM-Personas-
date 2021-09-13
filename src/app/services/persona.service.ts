import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
   cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
  url= 'api/people';

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  createPerson(person: Person): Observable<any> {

    return this.http.post(this.url, person,{ observe: 'response' });
  }

  deletePerson(id: number): Observable<any> {

    return this.http.delete(`${this.url}/${id}`,{ observe: 'response' });
  }

  editPerson(person: Person): Observable<any> {
    return this.http.put(this.url + person.id, person,{ observe: 'response' });
  }

}
