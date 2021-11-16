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
    // chatData: Reply = new Reply();

  // GET all posts from the server
  getReplies(id: number): Observable<any> {
    return this.httpClient.get(this.replyUrl + "/"+ id);
  }

    postReplyDetail(reply: Reply): Observable<any>  {
      return this.httpClient.post(this.replyUrl, reply);
    }

}

// import { Injectable } from '@angular/core';
// import { Reply } from '../models/reply.model';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReplydetailService {

//     constructor(private http:HttpClient) { }

//     readonly baseURL = 'http://localhost:28468/api/Replies'
//     chatData: Reply = new Reply();

//     postReplyDetail() {
//       return this.http.post(this.baseURL, this.chatData);
//     }
// }

