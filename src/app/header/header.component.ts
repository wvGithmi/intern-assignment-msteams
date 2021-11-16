import { Component, OnInit } from '@angular/core';

import { ClarityIcons, applicationsIcon, ellipsisHorizontalIcon, userIcon } from '@cds/core/icon';

ClarityIcons.addIcons(applicationsIcon, ellipsisHorizontalIcon, userIcon);
import '@cds/core/search/register.js';

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
