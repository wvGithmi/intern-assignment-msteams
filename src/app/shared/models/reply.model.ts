import {AbstractControl, ValidationErrors} from "@angular/forms";

export class Reply {
  id: number;
  postId: number;
  replySenderId: number;
  replyTime: Date;
  content: string;

  constructor(id: number, postId: number, replySenderId: number, replyTime: Date, content: string) {
    this.id = id;
    this.postId = postId;
    this.replySenderId = replySenderId;
    this.replyTime = replyTime;
    this.content = content;
  }
}

