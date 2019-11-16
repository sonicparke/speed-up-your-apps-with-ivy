import { Component, OnInit } from '@angular/core';

class FormData {
  username: any;
  password: any;

  constructor() {}
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public formData = new FormData();
  public showSubmittedData = false;
  constructor() {}

  ngOnInit() {}
  public signIn() {
    console.log('this.formData :', this.formData);
  }
}
