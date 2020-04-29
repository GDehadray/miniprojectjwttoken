import {Component} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {HomeService } from "./home.service";

@Component({
    templateUrl:"./home.component.html"
})

export class HomeComponent{
    public result:any;
    constructor(public service:HomeService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        }, (errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};