import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  public testValue: string = "";
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      user: this.formBuilder.group({
        "username": ["", Validators.compose([Validators.required])],
        "email": ["", Validators.compose([Validators.required, Validators.email])],
        "password": ["", Validators.compose([Validators.required])]
      })
    });

    this.formGroup.valueChanges.subscribe((value: any) => {
    });
  }

  onSubmit() {
  }

}
