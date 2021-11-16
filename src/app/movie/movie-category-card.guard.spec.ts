import { TestBed } from '@angular/core/testing';

import { MovieCategoryCardGuard } from './movie-category-card.guard';

describe('MovieCategoryCardGuard', () => {
  let guard: MovieCategoryCardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MovieCategoryCardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
