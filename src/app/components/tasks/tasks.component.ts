import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; 
 
  constructor(
    private _taskService: TaskService
  ) { }

  ngOnInit(): void {
   this._taskService.getTasks().subscribe(
      res => {
        this.tasks = res
      }
    );
  }

}
