import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Activity } from '../model/activity';
import { Observable } from 'rxjs';
import {Specie} from "../model/specie";

@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private activityUrl: string;

  constructor(private http: HttpClient) {
    this.activityUrl = 'http://localhost:8080/';
  }

  public findAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl+"activitys");
  }

  public save(activity: Activity) {
    return this.http.post<Activity>(this.activityUrl+"activity", activity);
  }

  public delete(id:number){
    return this.http.delete<Activity>(this.activityUrl+
      'activity/'+id)
  }
}
