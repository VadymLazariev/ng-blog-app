import {Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { Post } from 'src/app/core/models/post.model';
import {Subject} from 'rxjs';
import {ScrollDispatcher} from '@angular/cdk/overlay';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private http: HttpService,
              private cdr: ChangeDetectorRef,
              private dispatcher: ScrollDispatcher,
              private router: Router) {
    this.dispatcher.scrolled()
      .pipe(takeUntil(this.destroy$)).
      subscribe(element => this.displayButtonContainer(element));
  }

  post: Post;
  showButtons: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  postId = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.getPost();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getPost() {
    if (this.postId) {
      this.http.getPost(this.postId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => {
          if (data) {
            this.post = data;
          }
        });
    }
  }

  deletePost() {
    if (this.postId) {
      this.http.deletePost(this.postId)
        .pipe(takeUntil(this.destroy$))
        .subscribe();
    }
  }

  navigateTo(route) {
    this.router.navigate([route]);
  }

  displayButtonContainer(element) {
    this.showButtons = element.elementRef.nativeElement.scrollTop > 10;
    this.cdr.detectChanges();
  }
}
