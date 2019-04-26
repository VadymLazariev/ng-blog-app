import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title = 'Sign Up!';

  signUpFormValue: Auth;

  constructor(private authService: AuthService,
              private jwt: JwtService,
              private router: Router ) { }

  ngOnInit() {
  }

  receiveFormValue(event: Auth) {
    this.signUpFormValue = event;
    if (this.signUpFormValue) {
      this.authService.register(this.signUpFormValue).subscribe(jwt => {
        if (jwt.token) {
          this.jwt.setJWT(jwt.token);
          this.router.navigate(['']);
        }
      });
    }
  }
}
