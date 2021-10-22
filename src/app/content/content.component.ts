import { Component, OnInit } from '@angular/core';

import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';

import { ClarityIcons, noteIcon, undoIcon } from '@cds/core/icon';

ClarityIcons.addIcons(undoIcon, noteIcon);

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  visibleButton = true;

  createField() {
    let row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `
      <br> 
      <input type="text" id="formFields_2" placeholder="Type a new message" size="100">
    `;
    document.querySelector('.input-field')?.appendChild(row);

    this.visibleButton = !this.visibleButton;
  }

}

