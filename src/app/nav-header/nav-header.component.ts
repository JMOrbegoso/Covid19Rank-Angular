import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() : void {
    this.isCollapsed = !this.isCollapsed;
  }

}
