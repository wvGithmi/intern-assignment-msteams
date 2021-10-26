import { Component, OnInit } from '@angular/core';
//import { UserdetailService } from '../shared/userdetail.service';

import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons, noteIcon, undoIcon } from '@cds/core/icon';
//import { NgForm } from '@angular/forms';

ClarityIcons.addIcons(undoIcon, noteIcon);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  ngOnInit(): void {
  }

  visibleButton = true;

  createField() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = ` 
      <input name="postContent" #postContent="ngModel"
              [(ngModel)]="service.chatData.postContent" 
              placeholder="Type a new message"
              id="formFields_2" size="100" required>   
    `;

    document.querySelector('.input-field')?.appendChild(row);

    this.visibleButton = !this.visibleButton;
  }

  createCard() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <div class="card card-background">
      <div class="card-header">
        <b>Githmi Vithanawasam</b>
        <small> 8/2 9:15 AM</small>  
        <div class="card-text">
          <p>Good Morning!</p>
        </div>
      </div>
      <div class="card-block">
        <div class="card-text">
          <cds-icon shape="undo"></cds-icon>
          Reply
        </div>
      </div>
    </div>
    `;
 
    document.querySelector('.send-but')?.appendChild(row);
  }



  //constructor(public service: UserdetailService) { }

  // onSubmit(form: NgForm) {
  //   this.service.postUserDetail().subscribe(
  //     res => {

  //     },
  //     err => { console.log(err); }
  //   )
  // }
}
