import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { CommonModule, FormStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { FormsModule} from "@angular/forms";


@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule,HttpClientModule,
              FormsModule,
            RouterModule.forChild([{path:"",component:LoginComponent}])],

    providers:[LoginService],
    exports:[LoginComponent]
})

 export class LoginModule{}