import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MovieModule } from './movie/movie.module';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MovieModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
