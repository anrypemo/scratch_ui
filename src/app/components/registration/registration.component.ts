import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  public testValue: string = "";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){}

}
