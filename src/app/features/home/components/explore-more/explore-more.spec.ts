import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMore } from './explore-more';

describe('ExploreMore', () => {
  let component: ExploreMore;
  let fixture: ComponentFixture<ExploreMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
