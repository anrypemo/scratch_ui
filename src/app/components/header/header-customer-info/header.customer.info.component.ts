import {Component, Input, OnInit} from "@angular/core";
import {UserAuthService} from "../../../services/user-auth.service";

@Component({
  selector: 'scratch-header-customer-info',
  templateUrl: './header.customer.info.component.html',
  styleUrls: ['./header.customer.info.component.less']
})
export class HeaderCustomerInfoComponent implements OnInit {

  @Input()
  public currentUser: string;

  constructor(private userAuthService: UserAuthService) {
  }

  ngOnInit() {
  }

  _onLogout(){
    this.userAuthService.logout();
  }
}
