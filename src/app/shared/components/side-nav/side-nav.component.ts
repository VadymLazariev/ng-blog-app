import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() IsOpened: boolean;

  constructor(private jwt: JwtService) {

  }

  isLoggedIn: boolean;

  ngOnInit() {
    this.jwt.isTokenExist().subscribe(isToken => {
      this.isLoggedIn = isToken;
    });
  }

  logout() {
    this.jwt.removeJWT();
  }

}
