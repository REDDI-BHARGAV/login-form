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
       return confirm('Do You Want Go To Another Page ');
        
    }
}