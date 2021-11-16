import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/post.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  isShowingNewConversationForm: boolean = false;
  conversationList: Post[] =[];

  form: FormGroup = this.formBuilder.group({
    newConversation: [null, Validators.required],
  });

  constructor(private postService: PostService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadConversations();
  }
  
  toggleToNewConversationForm() {
    this.isShowingNewConversationForm = true;
  }

  loadConversations() {
    this.postService.getPosts().subscribe((posts) => {
      this.conversationList = posts;
    })
  }

  submit() {
    if(this.form.status === "VALID"){
      const newPost = new Post(0, 1, new Date(), this.form.value.newConversation);
      this.conversationList.push(newPost); // *******
      this.postService.addPost(newPost).subscribe();
      this.form.reset();
    }
  }
}
