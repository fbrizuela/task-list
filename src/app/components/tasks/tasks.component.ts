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
   this._taskService.getTasks()
   .subscribe(
      res => {
        this.tasks = res
      }
    );
  }
  deleteTask(task: Task){
    this._taskService.deleteTask(task)
    .subscribe(() => {
      this.tasks = this.tasks.filter( t => t.id !== task.id)
    });
  }
  onToggleReminder(task: Task){
    task.reminder = !task.reminder
    this._taskService.updateTaskReminder(task)
    .subscribe();
    console.log(task.reminder)
  }
}
