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


@NgModule({
  declarations: [
    AppComponent,
    DogNewComponent,
    DogEditComponent,
    DogIndexComponent,
    DogShowComponent,
    DogComponent,
    DogRoutingModule
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
