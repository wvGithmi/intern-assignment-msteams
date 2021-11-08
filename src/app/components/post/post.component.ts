import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import '@cds/core/icon/register.js';
import { PostService } from 'src/app/shared/services/post.service';
import { ClarityIcons, pencilIcon } from '@cds/core/icon';
import { Post } from 'src/app/shared/models/post.model';

ClarityIcons.addIcons(pencilIcon);

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  // posts: Post[] = [];
  objPosts: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.message = this.conversation.postContent;

  }

  // addPost(content: any): void {
  //   if (!content) { return; }
  //   this.postService.addPost({ content })
  //     .subscribe(Post => {
  //       this.posts.push(Post);
  //     });
  // }

  @Input() conversation: any;
  isReplying: boolean = false;
  today: Date = new Date();
  isUpdating: boolean = false;
  message: string = "";
  newMessage: string = "";
  replyList: any = [];
  replyMessage: string = "";

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


