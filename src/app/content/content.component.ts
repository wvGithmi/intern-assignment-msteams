import { Component, OnInit } from '@angular/core';

import '@cds/core/icon/register.js';
import '@cds/core/button/register.js';

import {ClarityIcons, noteIcon, undoIcon } from '@cds/core/icon';
import {CdsButton} from '@cds/core/button';

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

}
