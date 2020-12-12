import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalLineChartComponent } from './historical-line-chart.component';

describe('HistoricalLineChartComponent', () => {
  let component: HistoricalLineChartComponent;
  let fixture: ComponentFixture<HistoricalLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
