import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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

  testLogin() {
    const body = {username: "test", password: "test123"};

    return this.http.post('http://localhost:8080/login', JSON.stringify(body));

  }

}
