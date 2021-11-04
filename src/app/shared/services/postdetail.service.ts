import { Injectable } from '@angular/core';
import { Postdetail } from '../models/postdetail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostdetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:28468/api/PostDetail'
  chatData: Postdetail = new Postdetail();

  publishPostDetail() {
    return this.http.post(this.baseURL, this.chatData);
  }
}

// sample codes for getting data from API
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
