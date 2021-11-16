import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  private postsUrl = 'http://localhost:5000/api/Posts'; // URL to server

  // chatData: Post = new Post()

  httpOptions = {
    // headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // POST a new post to the server
  addPost(post: Post): Observable<any> {
    return this.httpClient.post(this.postsUrl, post);
  }

  // GET all posts from the server
  getPosts(): Observable<any> {
    return this.httpClient.get(this.postsUrl);
  }



  // UPDATE posts with edit messages
  updatePost(post: Post): Observable<any> {
    console.log(post);
    const url = `${this.postsUrl}/${post.id}`;
    return this.httpClient.put(url, post, this.httpOptions);
  }

  // Delete a post from the server
  deletePost(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    console.log(post);
    return this.httpClient.delete(url, this.httpOptions);
  }
}

// import { Injectable } from '@angular/core';
// import { Post } from '../models/post.model';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {

//   constructor(private httpClient: HttpClient, private messageService: MessageService) { }

//   private postsUrl = 'http://localhost:5000/api/Posts'; // URL to server

//   chatData: Post = new Post()

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//   };

//   // POST a new post to the server
//   addPost(post: Post): Observable<any> {
//     return this.httpClient.post(this.postsUrl, post);
//   }

//   // GET all posts from the server
//   getPosts(): Observable<any> {
//     return this.httpClient.get(this.postsUrl);
//   }

//   // UPDATE posts with edit messages
//   updatePost(post: Post): Observable<any> {
//     console.log(post);
//     const url = `${this.postsUrl}/${post.id}`;
//     return this.httpClient.put(url, post, this.httpOptions);
//   }

//   // Delete a post from the server
//   deletePost(post: Post): Observable<any> {
//     const url = `${this.postsUrl}/${post.id}`;
//     console.log(post);
//     return this.httpClient.delete(url, this.httpOptions);
//   }
// }
