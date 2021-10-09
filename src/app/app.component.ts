import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Мои задачи';
  projects: any;

  constructor(public api: ApiService) {
    this.api.superProjects$.subscribe(v => this.projects = v)
  }
  
  ngOnInit() {
    this.api.getProjects();
  }


}
