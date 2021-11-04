import { Injectable } from '@angular/core';
import { Replydetail } from '../models/replydetail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReplydetailService {

    constructor(private http:HttpClient) { }

    readonly baseURL = 'http://localhost:28468/api/ReplyDetail'
    chatData: Replydetail = new Replydetail();

    postReplyDetail() {
      return this.http.post(this.baseURL, this.chatData);
    }
}

