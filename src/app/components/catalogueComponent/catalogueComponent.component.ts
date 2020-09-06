import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {CoursesServices} from '../../services/courses.service';
import { Courses } from 'src/app/models/courses';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'catalogue',
    templateUrl: './catalogueComponent.component.html',
    providers: [CoursesServices],
    styleUrls:['./catalogueComponent.component.css']
})


export class catalogueComponent implements OnInit, AfterViewInit {

    public dataSource = new MatTableDataSource<Courses>();
    public columnas: string[] = ['Titulo', 'Profesor', 'Nivel', 'Horas'];
    constructor
    (
        private _coursesService: CoursesServices,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    
    ngOnInit(){
        this._coursesService.getCourses().subscribe(
            response => {
                if(response){
                    this.dataSource.data = response.filter(function(item){
                        return item.activo == true;
                    });
                }
            },
            error => {
                console.log(error);
            }
        )

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    nuevo(){
        this._router.navigate(['/nuevo-curso'])
    }

}