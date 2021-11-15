import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { CardImageComponent } from './shared/card-image/card-image.component';
import { ConvertToEllipsesPipe } from './shared/convert-to-ellipses-pipes/convert-to-ellipses.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    CardImageComponent,
    ConvertToEllipsesPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
