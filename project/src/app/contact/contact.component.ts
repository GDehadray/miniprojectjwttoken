import {Component} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {ContactService } from "./contact.service";

@Component({
    templateUrl:"./contact.component.html"
})

export class ContactComponent{
    public result:any;
    constructor(public service:ContactService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        }, (errRes:HttpErrorResponse)=>{
            console.log(errRes);
        });
    };
};