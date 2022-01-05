import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WookieComponent } from './models/wookie/wookie.component';
import { SelfieComponent } from './models/selfie/selfie.component';

@NgModule({
  declarations: [
    AppComponent,
    WookieComponent,
    SelfieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
