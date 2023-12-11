import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent }       from './users.component';
import { UsersListComponent }   from './containers/users-list/users-list.component';

const routes:Routes = [
    { path:'', component:UsersComponent, children: [
            { path:'', redirectTo:'users-list', pathMatch:'full' },
            { path:'users-list', component:UsersListComponent },
            // { path:'users-detail/:reference', component:UsersDetailComponent },
        ] 
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UsersRoutingModule {  }