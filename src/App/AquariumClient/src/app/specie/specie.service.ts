import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Specie } from '../model/specie';
import { Observable } from 'rxjs/Observable';
import {Animal} from "../model/animal";

@Injectable({
  providedIn: 'root'
})

export class SpecieService {

  private speciesUrl: string;

  constructor(private http: HttpClient) {
    this.speciesUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Specie[]> {
    return this.http.get<Specie[]>(this.speciesUrl+
    'species',);
  }

  public save(specie: Specie) {
    return this.http.post<Specie>(this.speciesUrl+
      'specie/', specie);
  }

  public delete(id:number){
    return this.http.delete<Specie>(this.speciesUrl+
    'specie/'+id)
  }
  /*
  public findAnimals(id : number): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.speciesUrl+);
  }*/
}
