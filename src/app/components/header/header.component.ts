import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../../services/user-auth.service';

@Component({
  selector: 'scratch-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public currentUser;

  public greetings;


  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit() {
    this.userAuthService.getCurrentUser().subscribe(data => {
      this.currentUser = data;
    })
  }

  signIn() {

  }

  signUp() {

  }

  testGreetings(){
    this.userAuthService.testGreetings().subscribe(data => {
      this.greetings=data["response"];
    })
  }

}
