import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "./localstorage.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) {
  }

  private getHeader() {
    const token = this.localStorage.getItem("token");
    const bearer = token["access_token"];
    return {
      'Authorization': 'Bearer' + bearer
    }
  }

  get(url): Observable<any> {
    let headers=this.getHeader();
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data): Observable<any> {
    let headers=this.getHeader();
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
