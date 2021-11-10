import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import '@cds/core/icon/register.js';
import { ClarityIcons, pencilIcon, trashIcon } from '@cds/core/icon';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';

ClarityIcons.addIcons(pencilIcon, trashIcon);

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  objPosts: Post;

  @Input() conversation: any;
  @Input() reloadConversationFromDb: void;
  isReplying: boolean = false;
  today: Date = new Date();
  isUpdating: boolean = false;
  message: string = "";
  newMessage: string = "";
  replyList: any = [];
  replyMessage: string = "";

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.message = this.conversation.content;
    //this.today = this.objPosts.createdTime;
  }

  handleReply() {
    this.isReplying = true;
  }

  Reply(value: NgForm) {
    console.log(value);
    this.replyList.push({ time: new Date(), message: this.replyMessage });
    this.isReplying = false;
  }

  // handleUpdate() {
  //   this.isUpdating = true;
  // }

  handleUpdate(): void {
    this.isUpdating = true;

    var post = new Post();
    if (post) {
      this.postService.updatePost(post).subscribe();
    }
  }

  saveUpdate(value: NgForm) {
    console.log(value);
    this.message = this.newMessage;
    this.isUpdating = false;
    console.log(this.message);
  }

  handledelete() {
    this.postService.deletePost(this.conversation);
    this.reloadConversationFromDb;
  }

}


