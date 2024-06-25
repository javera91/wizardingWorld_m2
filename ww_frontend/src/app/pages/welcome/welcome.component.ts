import { Component, OnInit } from '@angular/core';
import { RegStudentsComponent } from '../../component/reg-students/reg-students.component';
import { EditStudentsComponent } from '../../component/edit-students/edit-students.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    RegStudentsComponent,
    EditStudentsComponent
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
