import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.css']
})
export class DialogErrorComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  public backHome() {
    this.router.navigateByUrl("/");
  }

}
