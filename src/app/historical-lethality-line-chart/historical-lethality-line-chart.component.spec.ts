import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalLethalityLineChartComponent } from './historical-lethality-line-chart.component';

describe('HistoricalLethalityLineChartComponent', () => {
  let component: HistoricalLethalityLineChartComponent;
  let fixture: ComponentFixture<HistoricalLethalityLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalLethalityLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalLethalityLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
