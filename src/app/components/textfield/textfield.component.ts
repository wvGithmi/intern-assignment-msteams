import { Component, OnInit } from '@angular/core';
import { PostdetailService } from '../../shared/postdetail.service';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {

  constructor(public service: PostdetailService) { }

  ngOnInit(): void {
  }

  visibleButton = true;

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
}
