import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { allPostsUrl } from '../urls/api-urls';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(allPostsUrl);
  }

  getPost(id): Observable<Post> {
    return this.http.get<Post>(allPostsUrl + `/${id}`);
  }

  createPost(body): Observable<any> {
    return this.http.post(allPostsUrl, body);
  }

  updatePost(id, body): Observable<any> {
    return  this.http.put(allPostsUrl + `/${id}`, body);
  }

  deletePost(id): Observable<any> {
    return  this.http.delete(allPostsUrl + `/${id}`);
  }
}
