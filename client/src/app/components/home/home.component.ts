import { Component, OnInit } from '@angular/core';
import { TasksServiceService } from 'src/app/services/tasks-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tasks = [];

  constructor(public _service: TasksServiceService) { }

  ngOnInit() {
    this._service.getAllTasks().subscribe(
      res => this.tasks = res,
      err => console.log(err)
    );
  }

  displayedColumns = ["taskDescription", "date", "name", "actions"];

  public deleteClick(id) {
    this._service.deleteTask(id).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => console.log(err)
    );
  }
}
