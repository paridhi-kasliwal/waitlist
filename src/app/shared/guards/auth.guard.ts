import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from '../services/helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private router: Router, private _helperService: HelperService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
        return this.checkAuthorization(state.url);
    }

    checkAuthorization(url) {
        let currentUser = this._helperService.getStorage('userInfo');
        if(url === `/thankyou` && currentUser.result === undefined){
            this.router.navigate(['/welcome']);
            return false;
        } else {
            return true;
        }
    }
}
