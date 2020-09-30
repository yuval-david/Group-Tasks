import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksServiceService } from 'src/app/services/tasks-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { DialogFormComponent } from '../dialog-form/dialog-form.component';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public _fb: FormBuilder, public _service: TasksServiceService, public router: Router, public dialog: MatDialog) { }

  public familyMembers;
  public form: FormGroup;
  public Swal;


  ngOnInit() {
    this._service.getAllMembers().subscribe(
      res => { this.familyMembers = res; console.log(res) },
      err => console.log(err)
    );

    this.form = this._fb.group({
      taskDescription: "",
      member_id: 0
    })
  }

  public submit() {
    this._service.addTask(this.form.value).subscribe(
      res => {
        console.log(this.form.value);
        console.log(res);
        this.openDialog();

      },
      err => {
        console.log(err);
        this.openDialogErr();

      }
    );
  }

  public openDialog() {
    this.dialog.open(DialogFormComponent);
  }

  public openDialogErr() {
    this.dialog.open(DialogErrorComponent);
  }




}
