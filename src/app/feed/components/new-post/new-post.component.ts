import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../../../core/models/post.model';
import {HttpService} from '../../../core/services/http.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, OnDestroy {

  constructor(private http: HttpService,
              private  router: Router) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(post: Post) {
    this.http.createPost(post)
      .pipe(takeUntil(this.destroy$))
      .subscribe( data => {
      if (data) {
        this.router.navigate(['']);
      }
    });
  }


}
