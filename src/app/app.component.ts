import { Component, Injector, ɵrenderComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private injector: Injector) {}

  public loadLogin() {
    import('./login-form/login-form.component').then(c => {
      ɵrenderComponent(c.LoginFormComponent, {
        host: 'app-login-form',
        injector: this.injector
      });
    });
  }
}
