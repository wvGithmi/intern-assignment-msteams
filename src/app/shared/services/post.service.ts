import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient, private messageService: MessageService) { }

  private postsUrl = 'http://localhost:5000/api/Posts'; // URL to server

  chatData: Post = new Post()

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    this.messageService.add(`PostService: $(message)`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  // POST a new post to the server
  // addPost(post: Post): Observable<Post> {
  //   return this.http.post<Post>(this.postsUrl, post, this.httpOptions).pipe(
  //     tap((newPost: Post) => this.log(`added post w/ id=${newPost.id}`)),
  //     catchError(this.handleError<Post>('addPost'))
  //   );
  // }

  addPost(post: Post): Observable<any> {
    return this.httpClient.post(this.postsUrl, post);
  }

  getPosts(): Observable<any> {
    return this.httpClient.get(this.postsUrl);
  }
}
