import { Component, OnInit } from '@angular/core';

import '@cds/core/icon/register.js';
import { ClarityIcons, bellIcon, employeeGroupIcon, chatBubbleIcon, tasksIcon, fileIcon, gridViewIcon, helpIcon } from '@cds/core/icon';

ClarityIcons.addIcons(bellIcon, employeeGroupIcon, chatBubbleIcon, tasksIcon, fileIcon, gridViewIcon, helpIcon);

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
