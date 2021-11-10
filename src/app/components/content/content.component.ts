import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { Post } from 'src/app/shared/models/post.model';
import { UserService } from 'src/app/shared/services/user.service';
import { PostService } from 'src/app/shared/services/post.service';
import { NgForm } from '@angular/forms';
import { ClarityIcons, noteIcon, undoIcon } from '@cds/core/icon';

ClarityIcons.addIcons(undoIcon, noteIcon);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  users: User[] = [];

  conversationList: any = [];

  constructor(public postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.reloadConversationFromDb();
  }

  reloadConversationFromDb() {
    this.postService.getPosts().subscribe((posts) => {
      console.log(posts)
      this.conversationList = [...posts];
    })
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users.slice(1, 5));
  }

  visibleButton = true;

  createField() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = ` `;

    document.querySelector('.input-field')?.appendChild(row);

    this.visibleButton = !this.visibleButton;
  }

  createPost(postData: NgForm) {
    // console.log(postData);
    const { content } =  postData as any;
    var post = new Post();

    post.createdBy = 1;
    post.createdTime = new Date();
    post.content = content;
    // console.log(post);

    this.postService.addPost(post).subscribe(data => {
      // post.createdTime.toISOString
      // console.log(post.createdTime);
      // console.log(data);
      this.conversationList.push(data);
    })
  }
}
