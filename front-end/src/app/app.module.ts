import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DogNewComponent } from './dog/dog-new/dog-new.component';
import { DogEditComponent } from './dog/dog-edit/dog-edit.component';
import { DogIndexComponent } from './dog/dog-index/dog-index.component';
import { DogShowComponent } from './dog/dog-show/dog-show.component';


@NgModule({
  declarations: [
    AppComponent,
    DogNewComponent,
    DogEditComponent,
    DogIndexComponent,
    DogShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
