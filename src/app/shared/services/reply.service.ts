import { Injectable } from '@angular/core';
import { Reply } from '../models/reply.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

    constructor(private httpClient:HttpClient) { }

    readonly replyUrl = 'http://localhost:5000/api/Replies'

    // GET all posts from the server
    getReplies(id: number): Observable<any> {
      return this.httpClient.get(this.replyUrl + "/"+ id);
    }

    // POST reply deatils to the server
    postReplyDetail(reply: Reply): Observable<any>  {
      return this.httpClient.post(this.replyUrl, reply);
    }
}

