import {Component} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {AboutService } from "./about.service";

@Component({
    templateUrl:"./about.component.html"
})

export class AboutComponent{
    public result:any;
    constructor(public service:AboutService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        }, (errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};