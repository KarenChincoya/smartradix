import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
    // Auth-routing.module
  ]
})
export class AuthModule { }