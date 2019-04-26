import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private jwt: JwtService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.jwt.getJWTSync();
        const jwt  = `Bearer ${token} `;
        if (token) {
            const authReq = req.clone({headers: req.headers.set('Authorization', jwt)});
            return next.handle(authReq);
          } else {
            return next.handle(req);
        }
    }
}