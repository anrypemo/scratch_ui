import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  selector: 'scratch-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  goToMain() {
    this.router.navigate([''])
  }
}
