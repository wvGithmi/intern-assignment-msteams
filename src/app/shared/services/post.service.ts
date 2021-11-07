import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:28468/api/Posts'
  chatData: Post = new Post();

  publishPost() {
    return this.http.post(this.baseURL, this.chatData);
  }

}
