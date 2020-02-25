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
    this.speciesUrl = 'http://localhost:8080/species';
  }

  public findAll(): Observable<Specie[]> {
    return this.http.get<Specie[]>(this.speciesUrl);
  }

  public save(specie: Specie) {
    return this.http.post<Specie>(this.speciesUrl, specie);
  }
  /*
  public findAnimals(id : number): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.speciesUrl+);
  }*/
}
