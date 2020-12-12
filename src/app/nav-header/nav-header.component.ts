import { Component, OnInit } from '@angular/core';

import { Covid19DataService } from '../covid19-data.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  isCollapsed = true;
  availableCountries : { [key: string]: string; } = {}

  constructor(private covid19DataService:Covid19DataService) {
    this.availableCountries = covid19DataService.availableCountries;
  }

  ngOnInit(): void {
  }

  toggleMenu() : void {
    this.isCollapsed = !this.isCollapsed;
  }

}
