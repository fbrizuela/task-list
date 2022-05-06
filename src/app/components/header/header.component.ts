import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Lita de Tareas';
  showAddTask: boolean = false;
  subscription?: Subscription;
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
  toggleAndTask() {
    this._uiService.toggleAddTask()
  }
}
