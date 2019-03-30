import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../../services/user-auth.service';
import {User} from "../../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'scratch-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public currentUser: string;


  constructor(private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.userAuthService.getCurrentUser().subscribe(data=>{
      this.currentUser = data.username;
    })
  }


  signUp() {
   this.userAuthService.test({username: "test", password: "test"}).subscribe(data=>{
     console.log(data);
   })
  }

  signIn(){
    this.router.navigate(['login']);
  }


}
