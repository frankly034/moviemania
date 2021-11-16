import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieCategoryComponent } from './movie-category.component';
import { MovieListComponent } from './movie-list.component';
import { MovieCategoryCardComponent } from './movie-category-card.component';
import { CardImageComponent } from '../shared/card-image/card-image.component';
import { ConvertToEllipsesPipe } from '../shared/convert-to-ellipses-pipes/convert-to-ellipses.pipe';
import { MovieCategoryCardGuard } from './movie-category-card.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieCategoryComponent,
    MovieCategoryCardComponent,
    CardImageComponent,
    ConvertToEllipsesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'movie/category/:category',
        canActivate: [MovieCategoryCardGuard],
        component: MovieCategoryComponent,
      },
      { path: '', component: MovieListComponent },
    ]),
  ],
  exports: [ConvertToEllipsesPipe],
})
export class MovieModule {}
