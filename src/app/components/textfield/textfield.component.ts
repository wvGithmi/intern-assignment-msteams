import { Component, OnInit } from '@angular/core';
import { PostdetailService } from '../../shared/services/postdetail.service';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor(public service: PostdetailService) { }

  ngOnInit(): void {
  }

}
