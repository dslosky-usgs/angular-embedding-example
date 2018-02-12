import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ShakemapComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerService } from './map/layers/layer.service';
import { EventsComponent } from './events/events.component';
import { EventService } from './events/event.service';
import { MapService } from './map/map.service';
import { ConfService } from './conf.service';


@NgModule({
  declarations: [
    ShakemapComponent,
    MapComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  exports: [
    ShakemapComponent
  ],
  providers: [LayerService, EventService, MapService, ConfService],
  bootstrap: [ShakemapComponent]
})
export class ShakemapModule { }
