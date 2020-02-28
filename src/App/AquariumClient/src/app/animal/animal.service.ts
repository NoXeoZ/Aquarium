import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../model/animal';
import { Observable } from 'rxjs';
import {Specie} from "../model/specie";

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  private animalUrl: string;

  constructor(private http: HttpClient) {
    this.animalUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalUrl+"animals");
  }

  public save(animal: Animal) {
    return this.http.post<Animal>(this.animalUrl+"animals", animal);
  }


  public delete(id:number){
    return this.http.delete<Animal>(this.animalUrl+
      'animal/'+id)
  }
}
