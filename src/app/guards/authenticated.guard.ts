import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationData } from '../config/ConfigurationData';
import { LocalStorageService } from '../service/shared/local-storage.service';

declare const ShowGeneralMessage:any;
@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private localStorageService:LocalStorageService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let token = this.localStorageService.GetToken();
    if(token==""){
this.router.navigate(["/security/login"]);
ShowGeneralMessage(ConfigurationData.NOT_LOGIN);

    return false;
}else{

  return true;
}
    
     
  }
  
}
