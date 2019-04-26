import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private jwt: JwtService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const token = this.jwt.getJWTSync();
        if (token) {
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
