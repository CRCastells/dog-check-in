import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogRoutingModule } from './dog-routing.module';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { DogNewComponent } from './dog-new/dog-new.component';
import { DogEditComponent } from './dog-edit/dog-edit.component';
import { DogComponent } from './dog.component';
import { DogShowComponent } from './dog-show/dog-show.component';
import { ShowErrorsComponent } from '../show-errors/show-errors.component';

import { ApiService } from '../services/api-service.service';

@NgModule({
  imports: [
    CommonModule,
    DogRoutingModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
  	DogNewComponent,
  	DogEditComponent,
  	DogComponent,
  	DogShowComponent,
    ShowErrorsComponent
  ],
  providers: [ApiService,NgForm],
})
export class DogModule { }
