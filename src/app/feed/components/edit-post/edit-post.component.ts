import { Component, OnInit } from '@angular/core';
import {Post} from '../../../core/models/post.model';
import {HttpService} from '../../../core/services/http.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onSubmit(post: Post) {
    this.http.updatePost(post._id, post);
  }
}
