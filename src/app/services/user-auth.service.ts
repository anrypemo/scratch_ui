import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {catchError, map} from "rxjs/internal/operators";
import {LocalStorageService} from "./localstorage.service";
import {HttpService} from "./http.service";
import {Router} from "@angular/router";


@Injectable()
export class UserAuthService {
  constructor(private http: HttpClient,
              private localStorage: LocalStorageService,
              private httpService: HttpService,
              private router: Router) {
  }

  login(username: string, password: string) {
    const loginPayload = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa('scratch-client:scratch-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers}).pipe(map(data => {
        this.localStorage.setItem('token', data);
        return true;
      }),
      catchError(() => {
        return Observable.empty();
      })
    );
  }

  logout() {
    this.localStorage.removeItem("token");
    this.router.navigate(['login']);


  }

  getCurrentUser() {
    return this.httpService.get("http://localhost:8080/user");
  }

  test(user): Observable<any> {
    return this.httpService.post('http://localhost:8080/login', user);
  }


}
