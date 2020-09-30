import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(public http: HttpClient) { }

  /* GET all MEMBERS */
  public getAllMembers(): Observable<any> {
    return this.http.get("http://localhost:1000/members");
  };

  /* GET all TASKS */
  public getAllTasks(): Observable<any> {
    return this.http.get("http://localhost:1000/tasks");
  };

  /* ADD a TASK */
  public addTask(body): Observable<any> {
    return this.http.post("http://localhost:1000/add", body, {
      headers: { 'Content-Type': 'application/json' },
      responseType: "text"
    });
  }

  /* DELETE a TASK */
  public deleteTask(id): Observable<any> {
    return this.http.delete("http://localhost:1000/delete/" + id);
  }

};
