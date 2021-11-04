import { Injectable } from '@angular/core';
import { Userdetail } from '../models/userdetail.model';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private chatUrl = 'http://localhost:5000/api/UserDetail'; // URL to server
  
  private log(message: string) {
    this.messageService.add(`UserDetailService: $(message)`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  /* GET users from the server */
  getUsers(): Observable<Userdetail[]> {
    return this.http.get<Userdetail[]>(this.chatUrl)
      .pipe(tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Userdetail[]>('getUsers', []))
    );
  }


  // getProducts(): Observable<any> {
//   return this.http.get<Product>(endpoint + 'products').pipe(
//     catchError(this.handleError)
//   );
// }

  
// getProduct(id: string): Observable<any> {
//   return this.http.get<Product>(endpoint + 'products/' + id).pipe(
//     catchError(this.handleError)
//   );
// }

  /* GET user name from the server */
  // getUser(id: string): Observable<any> {
  //   return this.http.get<Userdetail>('http://localhost:5000/api/UserDetail/id').pipe(
  //     catchError(this.handleError)
  //   );
  // }

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



