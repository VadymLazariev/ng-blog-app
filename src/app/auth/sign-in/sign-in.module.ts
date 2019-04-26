import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    SharedModule,
  ],
  providers: [
    AuthService
  ]
})
export class SignInModule { }
