import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private token$: BehaviorSubject<string>;

  constructor() {
    const token = localStorage.getItem('jwt_token');
    this.token$ = new BehaviorSubject(token);
  }

  setJWT(token): void {
    localStorage.setItem('jwt_token', token);
    this.token$.next(token);
  }

  getJWT(): Observable<any> {
    return this.token$.asObservable();
  }

  getJWTSync(): string {
    return this.token$.getValue();
  }

  removeJWT(): void {
    localStorage.removeItem('jwt_token');
    this.token$.next(null);
  }

  isTokenExist(): Observable<boolean> {
    return this.token$.asObservable().pipe(
      map(token => !!token)
    );
  }
}
