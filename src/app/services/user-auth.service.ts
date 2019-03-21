import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../model/user";


@Injectable()
export class UserAuthService {
  constructor(private http: HttpClient) {
  }

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa('scratch-client:scratch-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
  }

  logout() {

  }

  getCurrentUser() {
    return null;
  }

  testGreetings(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/test');
  }

}
