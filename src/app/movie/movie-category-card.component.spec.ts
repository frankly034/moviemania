import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCategoryCardComponent } from './movie-category-card.component';

describe('MovieCategoryCardComponent', () => {
  let component: MovieCategoryCardComponent;
  let fixture: ComponentFixture<MovieCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCategoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
