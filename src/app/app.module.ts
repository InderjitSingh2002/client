import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaceComponent } from './components/place/place.component';
import { PlaceService } from './services/place.service';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlaceService],
  bootstrap: [PlaceComponent]
})
export class AppModule { }
