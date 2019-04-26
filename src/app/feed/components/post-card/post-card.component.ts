import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routeToDetails(id): void {
    this.router.navigate(['feed/post/' + id]);
  }
}
