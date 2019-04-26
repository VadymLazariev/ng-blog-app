import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) { }

  posts: Post[] = null;
  subscription: Subscription = null;

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.subscription = this.httpService.getAllPosts().subscribe( (postsData: Post[]) => {
      this.posts = postsData;
      this.posts.map(post => {
        if (!post.image) {
          post.image = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
