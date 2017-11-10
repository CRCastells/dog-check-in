import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog.component';

import { Routes, RouterModule } from '@angular/router';
import { DogEditComponent } from './dog-edit/dog-edit.component';
import { DogIndexComponent } from './dog-index/dog-index.component';
import { DogNewComponent } from './dog-new/dog-new.component';
import { DogShowComponent } from './dog-show/dog-show.component';


const aboutRoutes: Routes = [
    {
        path: 'dogs',
        component: DogComponent,
        children: [ //create the sub sections (children) for this route
            {
                path: '',
                component: DogIndexComponent
            },
            {
                path: 'new',
                component: DogNewComponent
            },
            {
                path: ':id/edit',
                component: DogEditComponent
            },

            {
                path: ':id',
                component: DogShowComponent
            }
        ]
    }
];


@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DogRoutingModule { }
