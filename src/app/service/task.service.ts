import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks'
import { Task } from '../Task'
import {Observable, of} from 'rxjs'

import {HttpClient, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl="http://localhost:5001/tasks";

  constructor( 
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    // const  tasks = of(TASKS);
    // return tasks
    return this.http.get<Task[]>(this.apiUrl);
  }
}
