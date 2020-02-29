import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Sector} from "../model/sector";

@Injectable({
  providedIn: 'root'
})

export class SectorService {

  private sectorUrl: string;

  constructor(private http: HttpClient) {
    this.sectorUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.sectorUrl+"sectors");
  }

  public save(sector: Sector) {
    return this.http.post<Sector>(this.sectorUrl+"sector", sector);
  }

  public delete(id:number){
    return this.http.delete<Sector>(this.sectorUrl+
      'sector/'+id)
  }
}
