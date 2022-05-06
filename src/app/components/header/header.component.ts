import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Lita de Tareas';

  constructor() { }

  ngOnInit(): void {
  }
  toggleAndTask(){
   console.log("asdasd!"); 

  }
}
