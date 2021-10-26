import { Injectable } from '@angular/core';
import { Postdetail } from './postdetail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostdetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:28468/api/PostDetail'
  chatData: Postdetail = new Postdetail();

  postPostDetail() {
    return this.http.post(this.baseURL, this.chatData);
  }
}


