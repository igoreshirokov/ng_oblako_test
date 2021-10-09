import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.sass']
})
export class FormProjectComponent implements OnInit {
  name = new FormControl('');

  constructor(public api: ApiService) { }

  ngOnInit(): void {
  }

  sendProject(title: string) {
    // console.log(title)
    this.api.newProject(title)
  }

  clearInput() {
    this.name.setValue('');
  }

}
