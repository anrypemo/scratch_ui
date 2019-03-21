import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (sessionStorage.getItem("token")) {
      return true;
    }


    setTimeout( () => {
      this.router.navigate(["/login"], {queryParams: {back: btoa(state.url)}});
    }, 2000);
    return false;
  }
}
