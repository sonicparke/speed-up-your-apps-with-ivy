import {
  NgModule,
  ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginFormComponent]
})
export class LoginFormModule {
  constructor(private resolver: ComponentFactoryResolver) {}

  public resolveComponentFactory(): ComponentFactory<LoginFormComponent> {
    return this.resolver.resolveComponentFactory(LoginFormComponent);
  }
}
