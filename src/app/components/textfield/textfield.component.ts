import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor(public service: PostService) { }

  ngOnInit(): void {
  }

}
