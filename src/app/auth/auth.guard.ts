import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private route:Router){}

  canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
     ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       const isAuth = !!this.userService.LoggedInUser()
       if(isAuth){
         return true;
       }
       else{
          this.route.navigate(['/user/signin']) 
       }
  }

}
