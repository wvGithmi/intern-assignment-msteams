import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private chatUrl = 'http://localhost:5000/api/Users'; // URL to server
  
  private log(message: string) {
    this.messageService.add(`UserService: $(message)`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  /* GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.chatUrl)
      .pipe(tap(_ => this.log('fetched uesrs')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  /* GET user by id from the server */
  getUser(id: number): Observable<User> {
    // const url = `${this.chatUrl}/${id}`;
    const url = `${this.chatUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }


  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  




  

  // getUsers(): Userdetail[] {
  //   return Userdetail;
  // }

  //readonly baseURL = 'http://localhost:5000/api/UserDetail'
  // chatData: Userdetail = new Userdetail();

  // postUserDetail() {
  //   return this.http.post(this.baseURL,this.chatData);
  // }
}



