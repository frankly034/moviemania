import { Component, Input, OnInit } from '@angular/core';

import { SideBarMenu } from './side-bar';

@Component({
  selector: 'mm-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() sideBarMenu!: SideBarMenu[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
