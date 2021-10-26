import { Component, OnInit } from '@angular/core';

import '@cds/core/icon/register.js';
import { ClarityIcons, cogIcon, employeeIcon, filter2Icon } from '@cds/core/icon';

ClarityIcons.addIcons(filter2Icon, employeeIcon, cogIcon);

@Component({
  selector: 'app-leftpanel',
  templateUrl: './leftpanel.component.html',
  styleUrls: ['./leftpanel.component.css']
})
export class LeftpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
