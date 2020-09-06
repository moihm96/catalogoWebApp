import {Injectable} from '@angular/core';
import {Courses} from '../models/courses';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Global} from './global';


@Injectable()
export class CoursesServices{
    public url: string;
   constructor(
        private _http: HttpClient
   ){
        this.url= Global.url;
   }

   getCourses(): Observable<any>{
        return this._http.get(this.url + 'all');
        
   }
   pruebas(){
       return "Soy el servicio de cursos";
   }

   create(Courses):Observable<any>{
        let params = JSON.stringify(Courses);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url + 'nuevo', params, {headers: headers});
   }
    
}