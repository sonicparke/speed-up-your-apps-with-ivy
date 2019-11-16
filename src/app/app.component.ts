import {
  Component,
  Injector,
  ɵcreateInjector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('loginForm', { read: ViewContainerRef, static: true })
  public loginForm: ViewContainerRef;

  constructor(private injector: Injector) {}

  public loadLogin() {
    import('./login-form-material/login-form.module').then(
      ({ LoginFormModule }) => {
        const injector = ɵcreateInjector(LoginFormModule, this.injector);
        const loginFormModule = injector.get(LoginFormModule);
        const componentFactory = loginFormModule.resolveComponentFactory();
        const componentRef = this.loginForm.createComponent(componentFactory);
        componentRef.changeDetectorRef.markForCheck();
      }
    );
  }
}
