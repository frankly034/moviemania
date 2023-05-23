import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { ConvertToEllipsesPipe } from '../shared/convert-to-ellipses-pipes/convert-to-ellipses.pipe';
import { MovieCategoryCardGuard } from './movie-category-card.guard';

import { CardImageComponent } from '../shared/card-image/card-image.component';
import { MovieCategoryComponent } from './movie-category.component';
import { MovieListComponent } from './movie-list.component';
import { MovieCategoryCardComponent } from './movie-category-card.component';
import { MovieDetailComponent } from './movie-detail.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieCategoryComponent,
    MovieCategoryCardComponent,
    MovieDetailComponent,
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
      {
        path: 'movie/:id',
        component: MovieDetailComponent,
      },
      { path: '', component: MovieListComponent },
    ]),
    NgxSkeletonLoaderModule.forRoot(),
  ],
  exports: [ConvertToEllipsesPipe, CommonModule],
})
export class MovieModule {}
