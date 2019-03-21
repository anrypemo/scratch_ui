import {Component, OnInit} from "@angular/core";
import {User} from "../../model/user";
import {UserAuthService} from "../../services/user-auth.service";
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";


@Component({
  selector: 'scratch-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit() {

  }

  onSubmit() {
    const body = new HttpParams()
      .set('username', this.user.username)
      .set('password', this.user.password)
      .set('grant_type', 'password');
    this.userAuthService.login(body).subscribe(data =>{
      sessionStorage.setItem('token', JSON.stringify(data));
      this.router.navigate(['']);
    }, error => {
      alert(error.error)
    });
  }
}
