import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DogRoutingModule } from './dog/dog-routing.module';

import { AppComponent } from './app.component';
import { DogNewComponent } from './dog/dog-new/dog-new.component';
import { DogEditComponent } from './dog/dog-edit/dog-edit.component';
import { DogIndexComponent } from './dog/dog-index/dog-index.component';
import { DogShowComponent } from './dog/dog-show/dog-show.component';
import { DogComponent } from './dog/dog.component';

import { AgmCoreModule } from '@agm/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DogNewComponent,
    DogEditComponent,
    DogIndexComponent,
    DogShowComponent,
    DogComponent,
    DogRoutingModule,
    MapComponent,
    HeaderComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
    	apiKey: 'AIzaSyAcPOBYzMe3J_AkZrkC00BnTVdlc1ePv3E',
      libraries: ['places']
    }),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
