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
  addPost(post: Post): Observable<any> {
    return this.httpClient.post(this.postsUrl, post);
  }

  // GET all posts from the server
  getPosts(): Observable<any> {
    return this.httpClient.get(this.postsUrl);
  }

  // UPDATE posts with edit messages
  updatePost(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.httpClient.put(url, this.httpOptions).pipe(
      tap(_ => this.log(`updated post id=${post.id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }

    // Delete a post from the server
    deletePost(post: Post): void {
      const url =  `${this.postsUrl}/${post.id}`;
      console.log(post);
      this.httpClient.delete(url).subscribe();
    }
}
