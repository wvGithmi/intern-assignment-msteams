import { Injectable } from '@angular/core';
import { Reply } from '../models/reply.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReplydetailService {

    constructor(private http:HttpClient) { }

    readonly baseURL = 'http://localhost:28468/api/Replies'
    chatData: Reply = new Reply();

    postReplyDetail() {
      return this.http.post(this.baseURL, this.chatData);
    }
}

