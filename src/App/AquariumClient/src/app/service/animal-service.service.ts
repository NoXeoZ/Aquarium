import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../model/animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnimalServiceService {

  private animalUrl: string;

  constructor(private http: HttpClient) {
    this.animalUrl = 'http://localhost:8080/animals';
  }

  public findAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalUrl);
  }

  public save(user: Animal) {
    return this.http.post<Animal>(this.animalUrl, user);
  }
}
