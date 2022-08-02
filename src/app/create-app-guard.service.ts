import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginComponent } from "./login/login.component";
@Injectable({
    providedIn :'root'
})
export class CreateAddGuardService implements CanDeactivate<LoginComponent>{
    canDeactivate(component: LoginComponent):boolean{
        if(component.myformref.dirty)
        alert('login successfully');
       return confirm('Do You Want to move to register Page ');
        
    }
}