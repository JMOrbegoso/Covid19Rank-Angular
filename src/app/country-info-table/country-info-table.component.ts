import { Component, OnInit, Input } from '@angular/core';

import { Country } from '../covid19-data.types';

@Component({
  selector: 'app-country-info-table',
  templateUrl: './country-info-table.component.html',
  styleUrls: ['./country-info-table.component.css'],
})
export class CountryInfoTableComponent implements OnInit {
  @Input() country: Country | any;

  constructor() {}

  ngOnInit(): void {}
}
