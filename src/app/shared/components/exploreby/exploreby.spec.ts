import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exploreby } from './exploreby';

describe('Exploreby', () => {
  let component: Exploreby;
  let fixture: ComponentFixture<Exploreby>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exploreby]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exploreby);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
