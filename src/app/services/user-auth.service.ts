import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../model/user";


@Injectable()
export class UserAuthService {
  constructor(private http: HttpClient) {
  }

  login(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/login', user);
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
