import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



interface IProject {
  id: number
  title: string
  todos: Array<ITodo>
}

interface ITodo {
  id: number
  text: string
  isCompleted: boolean
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  // @Input() projects: any;
  projects: any;

  constructor(public api: ApiService) {
    this.api.superProjects$.subscribe(v => this.projects = v);
  }
  ngOnInit() {
  }

  todoClick(id:any, projectid: any) {
    this.api.editTodo(id, projectid)
    // console.log(id, projectid)
  }
  

}
