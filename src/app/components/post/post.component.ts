import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import '@cds/core/icon/register.js';
import { ClarityIcons, pencilIcon } from '@cds/core/icon';

ClarityIcons.addIcons(pencilIcon);

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  constructor() { }

  @Input() conversation: any;
  isReplying: boolean = false;
  today: Date = new Date();
  isUpdating: boolean = false;
  message: string = "";
  newMessage: string = "";
  replyList: any = [];
  replyMessage: string = "";

  ngOnInit(): void {
    this.message = this.conversation.postContent;
  }

  handleReply() {
    this.isReplying = true;
  }

  Reply(value: NgForm) {
    console.log(value);
    this.replyList.push({time: new Date(), message:this.replyMessage});
    this.isReplying = false;
  }

  handleUpdate() {
    this.isUpdating = true;
  }

  saveUpdate(value: NgForm) {
    this.message = this.newMessage;
    this.isUpdating = false;
  }

}


