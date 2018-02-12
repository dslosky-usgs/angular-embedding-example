import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShakemapModule } from './shakemap-app/app.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShakemapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
