import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from "../config";
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlGetProjects: string = config.API_URL + config.PROJECTS;
  response: any;
  data: any;
  public projects$ = new Subject();
  public superProjects$ = new Subject();




  constructor(private http: HttpClient) {
    console.log('ApiService')
   }


  getProjects() {
    this.http.get(this.urlGetProjects)
      .subscribe((response) => {
        console.log('getProject')
        this.superProjects$.next(response)
      });


  }



  newTodo(text: string, projectId: number) {

    this.http.post(config.API_URL + config.TODOS,
      { text, projectId }
    )
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        this.data = this.response.msg
        this.getProjects();
      });
  }
  editTodo(todoid: number, projectid: number) {
    this.http.patch(config.API_URL + config.PROJECTS + '/' + projectid + config.TODOS + '/' + todoid, {})
      .subscribe((response) => {
        this.response = response;
        console.log(this.response);
        this.data = this.response.msg
        this.getProjects();
      });
  }

  newProject(title: string) {
    this.http.post(config.API_URL+config.PROJECTS, {title})
    .subscribe(v => {
      console.log(v);
      this.getProjects();
    })
  }

}
