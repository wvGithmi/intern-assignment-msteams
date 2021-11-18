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

      this.postService.updatePost(updatedPost).subscribe();
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


