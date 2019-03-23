import {Component, OnInit} from "@angular/core";
import {UserAuthService} from "../../services/user-auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'scratch-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public isErrorVisible: boolean = false;
  public submitInProgress: boolean = false;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userAuthService: UserAuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      "username": ["", Validators.compose([Validators.required])],
      "password": ["", Validators.compose([Validators.required])]
    });

    this.formGroup.valueChanges.subscribe((value: any) => {
      console.log(value);
    });
  }

  onSubmit() {
    if (this.formGroup.valid && !this.submitInProgress) {
      this.submitInProgress = true;
      this.userAuthService.login(this.formGroup.value.username, this.formGroup.value.password).subscribe(data => {
        this.router.navigate(['']);
        this.submitInProgress = false;
      }, error => {
        this.isErrorVisible = true;
        this.submitInProgress = false;
      });
    }
  }

  forgotPassword() {
    this.router.navigate(['/login/reset-password'])
  }

  registration() {
    window.location.href = "registration";
  }

}
