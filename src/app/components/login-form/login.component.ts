import {Component, OnInit} from "@angular/core";
import {User} from "../../model/user";
import {UserAuthService} from "../../services/user-auth.service";
import {Router} from "@angular/router";


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
    this.userAuthService.login(this.user).subscribe(data =>{
      console.log(data);
      this.router.navigate([''])
    })
  }
}
