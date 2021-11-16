import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { MovieModule } from './movie/movie.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    MovieModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
