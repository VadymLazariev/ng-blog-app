import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { HttpService } from '../services/http.service';

@Injectable()
export class ResolvePost implements Resolve<Post> {
    constructor(private http: HttpService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.http.getPost(route.params.id);
    }
}
