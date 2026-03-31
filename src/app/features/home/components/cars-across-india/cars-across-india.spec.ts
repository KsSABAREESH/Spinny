import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsAcrossIndia } from './cars-across-india';

describe('CarsAcrossIndia', () => {
  let component: CarsAcrossIndia;
  let fixture: ComponentFixture<CarsAcrossIndia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsAcrossIndia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsAcrossIndia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
