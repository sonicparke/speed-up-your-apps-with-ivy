import { Component, OnInit } from '@angular/core';
import { LoginFormMaterialService } from './login-form-material.service';

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

  constructor(private service: LoginFormMaterialService) {}

  ngOnInit() {}
  public signIn() {
    this.service.test(this.formData);
  }
}
