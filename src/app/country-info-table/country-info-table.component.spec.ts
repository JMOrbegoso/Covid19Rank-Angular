import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfoTableComponent } from './country-info-table.component';

describe('CountryInfoTableComponent', () => {
  let component: CountryInfoTableComponent;
  let fixture: ComponentFixture<CountryInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryInfoTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
