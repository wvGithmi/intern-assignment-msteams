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
    private httpClient: HttpClient, private messageService: MessageService) { }

  private usersUrl = 'http://localhost:5000/api/Users'; // URL to server

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
    return this.httpClient.get<User[]>(this.usersUrl)
      .pipe(tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  // GET a user from the server
  getUserById(id: number): Observable<any> {
    return this.httpClient.get<User>(this.usersUrl + "/" + id);
  }
}

// import { Injectable } from '@angular/core';
// import { User } from '../models/user.model';
// import { Observable, of } from 'rxjs';
// import { MessageService } from './message.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   constructor(
//     private http: HttpClient, private messageService: MessageService) { }

//   private usersUrl = 'http://localhost:5000/api/Users'; // URL to server

//   private log(message: string) {
//     this.messageService.add(`UserService: $(message)`);
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error); 
//       return of(result as T);
//     };
//   }

//   /* GET users from the server */
//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.usersUrl)
//       .pipe(tap(_ => this.log('fetched uesrs')),
//       catchError(this.handleError<User[]>('getUsers', []))
//     );
//   }
// }



