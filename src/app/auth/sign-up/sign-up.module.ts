import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService
  ]
})
export class SignUpModule { }
