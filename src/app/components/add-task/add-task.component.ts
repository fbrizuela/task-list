import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';
import { Task } from '../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;
   

  constructor(
    private _uiService: UiService
  ) {
    this.subscription = this._uiService.onToggle()
    .subscribe(res => {
      this.showAddTask = res
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.text.length === 0) {
      alert("Please add a task!")
      return
    }
    const { text, day, reminder } = this
    const newTask = { text, day, reminder }
    this.onAddTask.emit(newTask);

  }

}
