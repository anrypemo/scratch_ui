import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserAuthService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {

  }

  logout() {

  }

  getCurrentUser() {
    return null;
  }

  testGreetings() {
    return this.http.get('http://localhost:8080/test');
  }

}
