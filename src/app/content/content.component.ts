// import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/shared/models/user.model';
// import { Post } from 'src/app/shared/models/post.model';
// import { UserService } from 'src/app/shared/services/user.service';
// import { PostService } from 'src/app/shared/services/post.service';
// import { NgForm } from '@angular/forms';
// import { ClarityIcons, noteIcon, undoIcon } from '@cds/core/icon';

// ClarityIcons.addIcons(undoIcon, noteIcon);

// @Component({
//   selector: 'app-content',
//   templateUrl: './content.component.html',
//   styleUrls: ['./content.component.css']
// })
// export class ContentComponent implements OnInit {
//   users: User[] = [];

//   conversationList: Post[] = [];

//   constructor(public postService: PostService, private userService: UserService) { }

//   ngOnInit(): void {
//     this.getUsers();
//     this.reloadConversationFromDb();
//   }

//   reloadConversationFromDb() {
//     console.log("Fire callback")
//     this.postService.getPosts().subscribe((posts) => {
//       console.log(posts)
//       this.conversationList = [...posts];
//     })
//   }

//   deletePost(post: Post) {
//     this.postService.deletePost(post).subscribe(() => {
//      this.reloadConversationFromDb();
//     });
//     console.log(this.conversationList);
//   }

//   createPost(postData: NgForm) {
//     const { content } =  postData as any;
//     var post = new Post();

//     post.createdBy = 1;
//     post.createdTime = new Date();
//     post.content = content;

//     this.postService.addPost(post).subscribe(data => {
//       // post.createdTime.toISOString
//       // console.log(post.createdTime);
//       this.conversationList.push(data);
//     })
//   }

//   getUsers(): void {
//     this.userService.getUsers().subscribe(users => this.users = users.slice(1, 5));
//   }

//   visibleButton = true;

//   createField() {
//     let row = document.createElement('div');
//     row.className = 'row';
//     row.innerHTML = ` `;

//     document.querySelector('.input-field')?.appendChild(row);

//     this.visibleButton = !this.visibleButton;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ClarityIcons, noteIcon } from "@cds/core/icon";
ClarityIcons.addIcons(noteIcon);

// import {PostService} from "../../shared/services/post.service";
// import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() {
  }
  // constructor(public postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    // this.reloadConversationFromDb()


  }

  // reloadConversationFromDb() {
  //   console.log("Fire callback")
  //   this.postService.getPosts().subscribe((posts) => {
  //     console.log(posts)
  //     this.conversationList = [...posts];
  //   })
  // }


}
