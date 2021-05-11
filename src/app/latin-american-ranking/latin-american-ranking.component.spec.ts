import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatinAmericanRankingComponent } from './latin-american-ranking.component';

describe('LatinAmericanRankingComponent', () => {
  let component: LatinAmericanRankingComponent;
  let fixture: ComponentFixture<LatinAmericanRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatinAmericanRankingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatinAmericanRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
