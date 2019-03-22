import {Component} from "@angular/core";

@Component({
  selector: 'scratch-reset-password',
  templateUrl: './reset.password.component.html',
  styleUrls: ['./reset.password.component.less']
})
export class ResetPasswordComponent {

  public email: string = "";
  public isErrorVisible: boolean = false;

  constructor() {

  }

  onSubmit() {

  }
}
