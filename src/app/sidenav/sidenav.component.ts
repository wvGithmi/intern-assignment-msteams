import { Component, OnInit } from '@angular/core';
import { ClarityIcons, bellIcon, calendarIcon, employeeGroupIcon, chatBubbleIcon, tasksIcon, fileIcon, gridViewIcon, helpIcon } from '@cds/core/icon';
ClarityIcons.addIcons(bellIcon, calendarIcon, employeeGroupIcon, chatBubbleIcon, tasksIcon, fileIcon, gridViewIcon, helpIcon);

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
    sideLinks = [
      {icon: "calendar", label:"Calendar", routerLink: "calendar"},
      {icon: "bell", label:"Activity", routerLink: "activity"},
      {icon: "chat-bubble", label:"Chat", routerLink: "chat"},
      {icon: "employee-group", label:"Teams", routerLink: "teams"},
      {icon: "tasks", label:"Assignments", routerLink: "assignments"},
      {icon: "file", label:"Files", routerLink: "files"},
      {icon: "grid-view", label:"App", routerLink: "app"},
      {icon: "help", label:"Help", routerLink: "help"},
    ]

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';

// import { ClarityIcons, bellIcon, employeeGroupIcon, chatBubbleIcon, tasksIcon, fileIcon, gridViewIcon, helpIcon } from '@cds/core/icon';

// ClarityIcons.addIcons(bellIcon, employeeGroupIcon, chatBubbleIcon, tasksIcon, fileIcon, gridViewIcon, helpIcon);

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.css']
// })
// export class SidenavComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
