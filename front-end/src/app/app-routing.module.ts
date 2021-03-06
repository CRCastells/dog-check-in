import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { DogComponent } from './dog/dog.component';
import { ConnectionsComponent } from './connections/connections.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
      path: 'map',
      component: MapComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'connections',
      component: ConnectionsComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'about',
      component: AboutComponent,
      canActivate: [AuthGuardService]
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
