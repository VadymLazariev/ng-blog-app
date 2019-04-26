import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth.model';
import { Observable } from 'rxjs';
import { loginUrl, registerUrl } from '../urls/api-urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(body: Auth ): Observable<any> {
    return this.http.post(registerUrl, body);
  }

  login(body: Auth ): Observable<any> {
    return this.http.post(loginUrl, body);
  }

}
