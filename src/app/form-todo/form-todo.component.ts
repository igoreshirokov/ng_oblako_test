import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.sass']
})
export class FormTodoComponent implements OnInit {
  taskName = new FormControl('');
  projectName = new FormControl('');
  projectsList: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public api: ApiService) { }

  ngOnInit(): void {
    this.projectsList = this.data.map((el: any) => { 
      return {
        id: el.id,
        title: el.title
      }
    })
  }

  sendForm() {
    const o = {
      text: this.taskName.value,
      projectId: this.projectName.value
    };
    this.api.newTodo(o.text,o.projectId)

  }
  clearInputTaskName() {
    this.taskName.setValue('');
  }
  clearInputProjectName() {
    this.projectName.setValue('');
  }

}
