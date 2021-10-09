import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { FormProjectComponent } from '../form-project/form-project.component';
import { FormTodoComponent } from '../form-todo/form-todo.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Input() title?: string | 'Список задач';
  @Input() projects: any;
  isOpenFormTodo = false;
  isOpenFormProject = false;

  constructor(public dialog: MatDialog, public api: ApiService) {

   }

  ngOnInit(): void {
  }

  openDialogProject() {
    let dialogRef = this.dialog.open(FormProjectComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog resukt: ${result}`);
    });
  }
  openDialogTodo() {
    let dialogRef = this.dialog.open(FormTodoComponent, {
      data: this.projects
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

}
