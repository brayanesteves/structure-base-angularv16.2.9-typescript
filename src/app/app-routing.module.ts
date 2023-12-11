import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }         from './app.component';

const routes:Routes = [
  { path:'', component:AppComponent, children: [
          { path:        '', loadChildren:() => import('./public/public.module').then(m => m.PublicModule) },
          { path:'intranet', loadChildren:() => import('./intranet/intranet.module').then(m => m.IntranetModule) }
      ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
