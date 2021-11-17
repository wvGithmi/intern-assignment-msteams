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
