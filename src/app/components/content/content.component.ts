import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons, noteIcon, undoIcon } from '@cds/core/icon';
import { PostdetailService } from 'src/app/shared/postdetail.service';

ClarityIcons.addIcons(undoIcon, noteIcon);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(public service: PostdetailService) { }

  ngOnInit(): void {
  }

  visibleButton = true;

  createField() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = ` 
        
    `;

    document.querySelector('.input-field')?.appendChild(row);

    this.visibleButton = !this.visibleButton;
  }

  createPost(post: NgForm) {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
    <div class="card card-background" *ngFor="let customer of customers;">
      <div class="card-header">
        <b>Githmi</b><b>Vithanawasam</b>
        <small> 8/2 9:15 AM</small>  
        <div class="card-text">
          <p>{{}}</p>
        </div>
      </div>
      <div class="card-block">
        <div class="card-text">
          <cds-icon shape="undo"></cds-icon>
          Reply
          <cds-icon shape="pencil" style="color: #2d2d2d; float: right;"></cds-icon>
        </div>
      </div>
    </div>
    `;
  
    document.querySelector('.send-but')?.appendChild(row);

    this.service.publishPostDetail().subscribe(
      res => {
    
      },
      err => { console.log(err); }
    )
  }
}
