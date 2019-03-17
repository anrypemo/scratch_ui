import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../../services/user-auth.service';
import {User} from "../../model/user";

@Component({
  selector: 'scratch-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public currentUser: User;

  public greetings;


  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit() {

  }

  signIn() {
    this.userAuthService.login({username: "Test", password: "Test"}).subscribe(user => {
      this.currentUser = user;
    })
  }

  signUp() {

  }


  testLogin(){
    this.userAuthService.testLogin().subscribe(data => {
      this.currentUser=data["response"];
    })
  }

}
