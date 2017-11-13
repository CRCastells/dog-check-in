import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

import { Routes, RouterModule } from '@angular/router';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const userRoutes: Routes = [
	{
		path: 'users',
		component: UserComponent,
		children: [
			{
				path: '',
				component: UserIndexComponent
			},
			{
				path: ':id/edit',
				component: UserEditComponent
			},
			{
				path: ':id',
				component: UserShowComponent
			}
		]
	}
 ];

@NgModule({
	imports: [
	  RouterModule.forChild(userRoutes)

	],

	declarations: [],
	exports: [RouterModule]
	
})

export class UserRoutingModule { }
