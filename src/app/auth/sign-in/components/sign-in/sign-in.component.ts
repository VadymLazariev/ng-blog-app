import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title = 'Sign In!';
  signInFormValue: Auth;

  constructor(private auth: AuthService, private jwt: JwtService, private router: Router) { }

  ngOnInit() {
  }

  receiveFormValue(event: Auth) {
    this.signInFormValue = event;
    if (this.signInFormValue) {
      this.auth.login(this.signInFormValue).subscribe(jwt => {
          if (jwt.token) {
            this.jwt.setJWT(jwt.token);
            this.router.navigate(['']);
          }
      });
    }
  }
}
