import { Injectable } from '@angular/core';
import { Userdetail } from './userdetail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'http://localhost:28468/api/UserDetail'
  chatData: Userdetail = new Userdetail();

  postUserDetail() {
    return this.http.post(this.baseURL,this.chatData);
  }
}
