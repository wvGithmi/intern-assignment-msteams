// import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { NgForm } from "@angular/forms";
// import { ClarityIcons, pencilIcon, trashIcon } from '@cds/core/icon';
// import { Post } from 'src/app/shared/models/post.model';
// import { PostService } from 'src/app/shared/services/post.service';

// ClarityIcons.addIcons(pencilIcon, trashIcon);

// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.css']
// })

// export class PostComponent implements OnInit {
//   //objPosts: Post[] = [];

//   @Input() conversation: any;
//   @Output() deletePostEvent = new EventEmitter<Post>();
  
//   isReplying: boolean = false;
//   today: Date = new Date();
//   isUpdating: boolean = false;
//   message: string = "";
//   newMessage: string = "";
//   replyList: any = [];
//   replyMessage: string = "";

//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.message = this.conversation.content;
//     //this.today = this.objPosts.createdTime;
//   }

//   // Reply
//   handleReply() {
//     this.isReplying = true;
//   }

//   Reply(value: NgForm) {
//     console.log(value);
//     this.replyList.push({ time: new Date(), message: this.replyMessage });
//     this.isReplying = false;
//   }

//   // Delete
//   handleDelete() {
//     console.log("Click delete icon");
//     this.deletePostEvent.emit(this.conversation);
//   }

//   // Update
//   handleUpdate() {
//     this.isUpdating = true;
//   }

//   saveUpdate(value: NgForm) {
//     console.log(value);
//     this.message = this.newMessage;
//     this.isUpdating = false;
//     console.log(this.message);

//     const { editContent } = value as any;
//     let post = {
//       "id": this.conversation.id,
//       "createdBy": 1,
//       "createdTime": new Date(),
//       "content": editContent
//     }

//     console.log("Click update");
//     this.postService.updatePost(post).subscribe();

//     // let post2 = {
//     //   "id": this.conversation.id,
//     //   "createdBy": this.conversation.createdBy, 
//     //   "createdTime": new Date(),
//     //   "content": value
//     // }

//     // console.log("Click update")
//     // this.postService.updatePost(post2).subscribe();
// //------------------------
//     // const { content } =  postData as any;
//     // var post = new Post();

//     // post.createdBy = 1;
//     // post.createdTime = new Date();
//     // post.content = content;

//     // this.postService.addPost(post).subscribe(data => {
//     //   // post.createdTime.toISOString
//     //   // console.log(post.createdTime);
//     //   this.conversationList.push(data);
//     // })
//   }

//   // save(): void {
//   //   if (this.hero) {
//   //     this.heroService.updateHero(this.hero)
//   //       .subscribe(() => this.goBack());
//   //   }
//   // }
// }

import { Component, Input, OnInit } from '@angular/core';
import { arrowIcon, ClarityIcons, pencilIcon, undoIcon } from '@cds/core/icon';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from 'src/app/shared/models/post.model';
import { Reply } from 'src/app/shared/models/reply.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ReplyService } from 'src/app/shared/services/reply.service';
import { PostService } from 'src/app/shared/services/post.service';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(arrowIcon, undoIcon, pencilIcon);

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() conversation: Post | undefined;
  isReplying: boolean = false;
  replyList: Reply[] = [];
  isUpdating: boolean = false;
  userLogoLetter: string = "";
  fullName: string = "Githmi Anjana";
  createdTime: Date = new Date();
  content: string = "";

  constructor(private userService: UserService, private postService: PostService, private replyService: ReplyService, private formBuilder: FormBuilder) {
  }

  updateConversationForm: FormGroup = this.formBuilder.group({
    updatedConversation: [null, Validators.required],
  });

  replyForm: FormGroup = this.formBuilder.group({
    replyContent: [null, Validators.required],
  });

  ngOnInit(): void {
    this.content = this.conversation?.content || "";
    this.createdTime = this.conversation?.createdTime || new Date();
    this.getFullName();
    this.getAllReplies();
  }

  // TODO: Try to handle this from backend.
  getFullName() {
    return this.userService.getUserById(this.conversation?.id || 1).subscribe((response) => {
      this.fullName = response[0].userFirstName + " " + response[0].userLastName
      this.userLogoLetter = response[0].userFirstName.slice(0, 1)
    })
  }

  getAllReplies() {
    this.replyService.getReplies(this.conversation?.id || 0).subscribe((replies) => {
      this.replyList = replies;
    })
  }

  toggleReply() {
    this.isReplying = true;
    this.isUpdating = false;
  }

  toggleUpdate() {
    this.isUpdating = true;
    this.isReplying = false;
  }

  //Make update conversation
  handleSubmitUpdatedContent() {
    this.isUpdating = false;
    if (this.updateConversationForm.status === "VALID") {
      this.content = this.updateConversationForm.value.updatedConversation;

      const updatedPost = new Post(
        this.conversation?.id ? this.conversation.id : 0,
        this.conversation?.createdBy ? this.conversation?.createdBy : 0,
        new Date(), this.updateConversationForm.value.updatedConversation);

      this.postService.updatePost(updatedPost);
      this.updateConversationForm.reset();
    }
  }

  // Make a new Reply
  handleSubmitReply() {
    if (this.replyForm.status === "VALID") {
      const replySenderId = 1; // Current logging user Id
      this.isReplying = false;

      const newReply = new Reply(
        0,
        this.conversation ? this.conversation.id : 0, // To handle undefine state. Not happen real scenario
        replySenderId,
        new Date(),
        this.replyForm.value.replyContent ? this.replyForm.value.replyContent : ""
      );

      this.replyList.push(newReply); // **************
      this.replyService.postReplyDetail(newReply).subscribe();
      this.replyForm.reset();
    }
  }

}


