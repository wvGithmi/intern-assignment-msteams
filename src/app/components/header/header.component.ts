import { Component, OnInit } from '@angular/core';

import '@cds/core/icon/register.js';
import { ClarityIcons, applicationsIcon, ellipsisHorizontalIcon, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(applicationsIcon, ellipsisHorizontalIcon, userIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
