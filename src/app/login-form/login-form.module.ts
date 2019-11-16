import {
  NgModule,
  ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule],
  exports: [LoginFormComponent]
})
export class LoginFormModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolveComponentFactory(): ComponentFactory<LoginFormComponent> {
    return this.resolver.resolveComponentFactory(LoginFormComponent);
  }
}
