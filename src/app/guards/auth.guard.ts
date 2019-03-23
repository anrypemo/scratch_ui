import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LocalStorageService} from "../services/localstorage.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorage: LocalStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.localStorage.getItem("token")) {
      return true;
    }


    setTimeout( () => {
      this.router.navigate(["/login"], {queryParams: {back: btoa(state.url)}});
    }, 2000);
    return false;
  }
}
