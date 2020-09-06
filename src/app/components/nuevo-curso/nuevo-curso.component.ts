import { Component, OnInit } from '@angular/core';
import { Courses} from '../../models/courses';
import {CoursesServices} from '../../services/courses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css'],
  providers: [CoursesServices]
})
export class NuevoCursoComponent implements OnInit {

  public courseselect: Courses = new Courses( "", "", "", true, 0);
  public checked = false;
  public status: string;
  constructor(
    private _coursesService : CoursesServices,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._coursesService.create(this.courseselect).subscribe(
      response => {
        if(response){
          this.status = 'success';
          this._router.navigate(['']);
        }else{
          this.status= 'error';
        }
      },
      error => {
        console.log(error);
        this.status = error;
      }
    )
  }

}
