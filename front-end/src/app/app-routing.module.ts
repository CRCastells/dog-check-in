import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: MapComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
