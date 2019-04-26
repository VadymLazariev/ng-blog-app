import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormMatcher } from 'src/app/core/material-form-matcher/form-matcher';
import { Auth } from 'src/app/core/models/auth.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @Input() formTitle: string;
  @Output() submitFormEvent = new EventEmitter<Auth>();

  matcher = new FormMatcher();

  public authForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });

  getFormValue() {
    if (this.authForm.valid) {
      this.submitFormEvent.emit(this.authForm.value);
    }
  }

  ngOnInit() {
  }

}
