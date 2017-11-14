import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogRoutingModule } from './dog-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DogNewComponent } from './dog-new/dog-new.component';
import { DogEditComponent } from './dog-edit/dog-edit.component';
import { DogComponent } from './dog.component';
import { DogShowComponent } from './dog-show/dog-show.component';

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
  	DogShowComponent
  ],
  providers: [ApiService]
})
export class DogModule { }
