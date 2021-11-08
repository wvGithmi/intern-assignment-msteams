import { Component, OnInit } from '@angular/core';

import { angleIcon, ClarityIcons, errorStandardIcon, plusIcon, videoCameraIcon } from '@cds/core/icon';

ClarityIcons.addIcons(plusIcon, angleIcon, videoCameraIcon, errorStandardIcon);

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.css']
})
export class SubnavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
