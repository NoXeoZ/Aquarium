import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pool } from '../model/pool';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PoolService {

  private poolUrl: string;

  constructor(private http: HttpClient) {
    this.poolUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Pool[]> {
    return this.http.get<Pool[]>(this.poolUrl+"pools");
  }

  public save(pool: Pool) {
    return this.http.post<Pool>(this.poolUrl+"pool", pool);
  }

  public delete(id:number){
    return this.http.delete<Pool>(this.poolUrl+
      'pool/'+id)
  }
}
