import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginFormMaterialService {
  constructor() {}

  public test(data) {
    console.log('Logging in with: ', data);
  }
}
