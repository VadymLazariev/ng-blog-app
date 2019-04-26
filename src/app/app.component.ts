import { Component, OnInit } from '@angular/core';
import {ScrollDispatcher} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-blog-client';
  navOpen: boolean;

  isSideNavBtnClicked() {
    this.navOpen = !this.navOpen;
  }
}
