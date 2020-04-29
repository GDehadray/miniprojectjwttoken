import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:"root"
})

export class LoginService{
     constructor(public http:HttpClient){}
     public signin(data):Observable<any>{
           return this.http.post("http://localhost:8080/login",data);
     };
};