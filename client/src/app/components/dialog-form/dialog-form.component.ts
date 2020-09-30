import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public backHome() {
    this.router.navigateByUrl("/");
  }

}
